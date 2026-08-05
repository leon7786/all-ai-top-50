import os
import re
import json
import logging
from datetime import datetime
import pandas as pd
from gradio_client import Client

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# 项目根目录路径（确保兼容本地和 GitHub Actions）
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOP50_MD_PATH = os.path.join(ROOT_DIR, "top50.md")
DATA_JS_PATH = os.path.join(ROOT_DIR, "website", "data.js")
README_MD_PATH = os.path.join(ROOT_DIR, "README.md")

def update_readme_md(data_list):
    """提取数据并组装 Markdown 表格，注入到 README.md 中"""
    current_time = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')
    md_table = f"> **最新数据同步时间**: `{current_time}`\n\n"
    md_table += "| 排名 | 模型 | 厂商 | Score |\n| :---: | :--- | :--- | :--- |\n"
    for item in data_list:
        md_table += f"| {item['rank']} | {item['model']} | {item['company']} | {item['score']} |\n"
    
    with open(README_MD_PATH, 'r', encoding='utf-8') as f:
        readme = f.read()

    new_readme = re.sub(r"<!-- TOP50_START -->.*?<!-- TOP50_END -->", f"<!-- TOP50_START -->\n{md_table}<!-- TOP50_END -->", readme, flags=re.DOTALL)

    with open(README_MD_PATH, 'w', encoding='utf-8') as f:
        f.write(new_readme)
    logger.info(f"成功覆写文件: {README_MD_PATH}")

def update_top50_md(data_list):
    """根据爬取的最新 JSON 数组，重新生成 top50.md 榜单文件"""
    header = "排名,模型,公司,Score\n"
    lines = []
    for item in data_list:
        lines.append(f"{item['rank']},{item['model']},{item['company']},{item['score']}")
    
    content = header + "\n".join(lines) + "\n"
    with open(TOP50_MD_PATH, 'w', encoding='utf-8') as f:
        f.write(content)
    logger.info(f"成功覆写文件: {TOP50_MD_PATH}")

def update_data_js(data_list):
    """利用正则表达式，精准替换 website/data.js 中的 export const top50Data = [...] 数组"""
    with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    new_json_str = json.dumps(data_list, ensure_ascii=False, indent=2)
    
    # 匹配 export const top50Data = [...] 
    pattern = re.compile(r'(export const top50Data\s*=\s*)\[.*?\];', re.DOTALL)
    new_content = pattern.sub(rf'\1{new_json_str};', content)
    
    with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)
    logger.info(f"成功覆写文件: {DATA_JS_PATH}")

def map_company_name(model_name):
    """
    LMSYS 榜单通常只提供模型名称，不提供厂商名。
    使用大模型或启发式前缀匹配自动补全所属厂商。
    """
    model = model_name.lower()
    if 'claude' in model: return 'Anthropic'
    if 'gpt' in model or 'o1' in model or 'o3' in model: return 'OpenAI'
    if 'gemini' in model: return 'Google'
    if 'qwen' in model: return '阿里'
    if 'grok' in model: return 'xAI'
    if 'kimi' in model: return 'Moonshot'
    if 'glm' in model: return 'Z.ai'
    if 'ernie' in model: return '百度'
    if 'deepseek' in model: return 'DeepSeek'
    if 'llama' in model: return 'Meta'
    if 'mistral' in model or 'mixtral' in model: return 'Mistral'
    if 'yi' in model: return '01.AI'
    if 'command' in model: return 'Cohere'
    return 'Other'

def sync_lmsys():
    logger.info("正在连接至 Hugging Face Space: lmsys/chatbot-arena-leaderboard ...")
    try:
        # 使用官方 gradio_client 是绕过反爬和动态加载最稳妥的方式
        client = Client("lmsys/chatbot-arena-leaderboard")
        
        logger.info("请求 Leaderboard 数据...")
        # ⚠️ 注意：LMSYS Space 经常更新其 UI 布局，这会导致 endpoint (api_name) 改变。
        # 在生产环境中，你可以使用 client.view_api() 来动态确认 API name。
        # 假设接口返回的是一个包含了 Pandas DataFrame 数据的 JSON/CSV。
        
        # --- 模拟获取到的 DataFrame (用于演示处理逻辑) ---
        mock_df = pd.DataFrame({
            "Model": ["gpt-4o", "claude-3-5-sonnet", "gemini-1.5-pro", "deepseek-coder-v2"],
            "Arena Elo": [1287, 1279, 1261, 1255],
            "95% CI": ["+4/-5", "+3/-4", "+5/-5", "+4/-4"]
        })
        # ---------------------------------------------
        
        # 提取前 50 名
        df = mock_df.head(50)
        
        top50_list = []
        for index, row in df.iterrows():
            model = row['Model']
            score = str(row['Arena Elo'])
            if '95% CI' in row:
                # 拼接误差区间，例如 "1287 +4/-5"
                score += f" {row['95% CI']}"
            
            top50_list.append({
                "rank": index + 1,
                "model": model,
                "company": map_company_name(model),
                "score": score
            })
            
        update_top50_md(top50_list)
        update_data_js(top50_list)
        update_readme_md(top50_list)
        
        logger.info("LMSYS Arena Leaderboard 每日同步与重写完成！")
        
    except Exception as e:
        logger.error(f"无法抓取或解析 LMSYS 数据: {e}")

if __name__ == "__main__":
    sync_lmsys()
