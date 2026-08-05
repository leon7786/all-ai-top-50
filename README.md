# 🌐 AI 枢纽 2026：全球顶级大模型全景图 (All AI Top 50)

[![GitHub Pages](https://img.shields.io/badge/部署在-GitHub%20Pages-blue)](https://leon7786.github.io/all-ai-top-50/)
[![Data Sync](https://github.com/leon7786/all-ai-top-50/actions/workflows/daily-sync.yml/badge.svg)](https://github.com/leon7786/all-ai-top-50/actions/workflows/daily-sync.yml)

**在线体验 (Live Demo)**: 👉 **[访问 AI 枢纽 2026 数据看板](https://leon7786.github.io/all-ai-top-50/)** 👈

---

## 📖 项目简介

**All AI Top 50** 是一个专为 AI 开发者、研究人员及极客设计的综合性前沿数据看板平台。本项目汇聚了截至 2026 年下半年全球最强的前 50 款大语言模型（LLM）能力排名，并独家盘点了国内外各大顶级 AI 厂商（OpenAI, Anthropic, Google, 阿里, 腾讯, Moonshot 等）的 API 计费清单与订阅套餐全景。

## ✨ 核心特性

- **极致现代 UI (Glassmorphism)**
  抛弃传统枯燥的数据表，底层基于 TailwindCSS 打造，具备全屏后台极光 Mesh 流动渐变、优雅的毛玻璃（Glassmorphism）悬浮卡片、以及丝滑的行级悬停微动效。对 2K/4K 大屏进行专属拥挤度优化，体验极佳。
  
- **全自动 CI/CD 数据流 (Data Pipeline)**
  摆脱手动更新！项目内置了一套工业级的 **GitHub Actions** 流水线。
  - **自动巡检**：每天 UTC 凌晨 2 点（北京时间上午 10 点）准时唤醒服务器。
  - **智能穿透**：底层采用官方 `gradio_client` SDK 绕过常规的反爬手段，直通 Hugging Face Space，拉取并解析最新 LMSYS Chatbot Arena Leaderboard 排行榜数据（Pandas DataFrame）。
  - **自动化部署**：更新完成后，由 Python 脚本在云端重构静态前端代码，并自动发布到 `gh-pages` 分支。真正的“零维护”无人值守！

- **数据与表现分离**
  所有核心数据均采用最原始、轻量的 Markdown (`.md`) 格式存储。搭配自研的 `build_worker.py`，随时将 MD 转换为前台精美的 JavaScript Array 数据。

## 🛠️ 技术栈

- **前端 UI**: HTML5 + Vanilla JS + **Tailwind CSS** (CDN)
- **数据引擎**: Python 3.10 
- **爬虫组件**: `gradio_client`, `pandas`, `requests`
- **自动化云**: GitHub Actions (Cron Scheduling & Event Triggers)
- **静态托管**: GitHub Pages

## 📂 项目结构

```text
all-ai-top-50/
├── website/              # 前端工程源码（UI、CSS、JS）
├── scripts/              # 数据抓取与云端同步 Python 脚本
│   └── sync_lmsys.py     # LMSYS 榜单每日自动拉取程序
├── .github/workflows/    # CI/CD 自动化流水线
│   └── daily-sync.yml    # GitHub Actions 任务编排文件
├── top50.md              # 纯文本数据：全球模型 Top 50 排名
├── token-price.md        # 纯文本数据：API Token 计费清单
├── plan.md               # 纯文本数据：消费者/开发者套餐矩阵
└── build_worker.py       # （历史版）编译脚本
```

## 🚀 使用与贡献

1. **一键强制更新数据**：
   在 GitHub 仓库顶部的 `Actions` 选项卡中，选中 `Daily Data Sync`，在右侧点击 `Run workflow` 即可一键更新今日全球最新榜单。

2. **本地二次开发**：
   您只需要修改根目录下的 `token-price.md`，然后提交代码。GitHub Actions 流水线会自动捕捉改动并重新为您生成漂亮的网页。
   
   如果想要本地预览：
   ```bash
   cd website
   python3 build_worker.py
   # 即可在本地加载 index.html 查看最新效果
   ```

---
*Created by [Leon7786](https://github.com/leon7786) — Welcome to the Agentic coding era (2026).*
