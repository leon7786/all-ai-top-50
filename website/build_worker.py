import os

html_path = 'index.html'
css_path = 'style.css'
data_path = 'data.js'
script_path = 'script.js'

with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

with open(data_path, 'r', encoding='utf-8') as f:
    data_content = f.read()
    # Remove exports to make it standard JS inside <script>
    data_content = data_content.replace('export const', 'const')

with open(script_path, 'r', encoding='utf-8') as f:
    script_content = f.read()
    # Remove imports
    lines = script_content.split('\n')
    script_content = '\n'.join([line for line in lines if not line.strip().startswith('import')])

# Inject CSS
css_tag = '<link rel="stylesheet" href="style.css">'
html_with_css = html_content.replace(css_tag, f'<style>\n{css_content}\n</style>')

# Inject JS
js_tag = '<script type="module" src="script.js"></script>'
injected_js = f'<script>\n{data_content}\n\n{script_content}\n</script>'
final_html = html_with_css.replace(js_tag, injected_js)

# Create a readable multi-line template literal
escaped_lines = []
for line in final_html.split('\n'):
    # Escape backslashes, backticks, and template expressions
    line = line.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    escaped_lines.append(line)

html_literal = '`' + '\n'.join(escaped_lines) + '`'

worker_code = f"""export default {{
  async fetch(request, env, ctx) {{
    const html = {html_literal};

    return new Response(html, {{
      headers: {{
        "content-type": "text/html;charset=UTF-8",
      }},
    }});
  }},
}};
"""

with open('../worker.js', 'w', encoding='utf-8') as f:
    f.write(worker_code)

print("worker.js successfully created at /root/1CT-Share/20260805-ai-top-50/worker.js")
