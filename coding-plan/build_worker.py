import os

def build_worker():
    # Read files
    with open('index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    with open('style.css', 'r', encoding='utf-8') as f:
        css_content = f.read()
    with open('data.js', 'r', encoding='utf-8') as f:
        data_js_content = f.read()
    with open('script.js', 'r', encoding='utf-8') as f:
        script_js_content = f.read()

    # Remove the import line from script.js to inline it
    script_js_content = script_js_content.replace("import { bookData } from './data.js';", "")

    # Inject CSS
    html_content = html_content.replace('<link rel="stylesheet" href="style.css">', f'<style>{css_content}</style>')
    
    # Inject JS
    combined_js = f"{data_js_content}\n\n{script_js_content}"
    html_content = html_content.replace('<script type="module" src="script.js"></script>', f'<script>{combined_js}</script>')

    # Wrap in Cloudflare Worker template
    worker_template = f"""
export default {{
  async fetch(request, env, ctx) {{
    const html = `{html_content}`;

    return new Response(html, {{
      headers: {{ 'Content-Type': 'text/html;charset=UTF-8' }},
    }});
  }},
}};
"""

    with open('../worker-coding-plan.js', 'w', encoding='utf-8') as f:
        f.write(worker_template)
        
    print("worker-coding-plan.js successfully created at /root/1CT-Share/20260805-ai-top-50/worker-coding-plan.js")

if __name__ == '__main__':
    build_worker()
