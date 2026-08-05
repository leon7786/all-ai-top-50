# 🚀 All AI Top 50 项目开发与填坑经验录 (Dev Log)

这份文档记录了我们在构建 **All AI Top 50 数据看板** 全过程中的核心技术决策、踩过的坑以及最佳工程实践。希望能为后来者或未来的二次开发提供宝贵的参考。

---

## 🎨 1. UI/UX 与前端视觉设计

### 1.1 毛玻璃 (Glassmorphism) 与极光渐变
- **设计思路**：为了摆脱传统数据报表的死板感，我们采用了现代化的 Glassmorphism 风格。
- **实现方案**：通过 TailwindCSS 的 `backdrop-blur` 和透明度背景（如 `bg-white/10`）实现卡片的悬浮感。背景则采用全屏的流体渐变（Mesh Gradient），赋予页面“活”的呼吸感。
- **踩坑记录**：最初的表格行悬停（hover）使用了 `transform: scale` 放大效果，导致用户在移动鼠标时表格整体发生抖动（Jitter）。最终通过去除 `scale`，仅保留背景色高亮和微小阴影变化，彻底解决了抖动问题，使得交互如丝般顺滑。

### 1.2 大屏适配与留白美学
- **设计痛点**：在 2K/4K 屏幕下，如果表格占满全宽，用户的视觉焦点会随着表格列左右剧烈跳跃，阅读体验极差。
- **解决方案**：引入了最大宽度限制（如 `max-w-6xl`）并将整体居中（`mx-auto`），确保左右留有充裕的“呼吸空间”。同时，使用 `w-max` 和 `whitespace-nowrap` 强制规范列宽，让每一列左对齐，不仅美观，也提升了信息获取的效率。

---

## 🏗️ 2. 数据架构设计 (Markdown 驱动开发)

### 2.1 数据与表现的解耦
- **核心理念**：前端只负责“长什么样”，数据只负责“存什么内容”。
- **架构方案**：所有底层数据（Top 50 排名、价格清单、订阅套餐）均采用最轻量级的 Markdown/CSV (`.md`) 格式存储。
- **Python 注入引擎**：开发了自研的 `build_worker.py`，它的作用是在部署前，读取本地的 `.md` 数据，并将其清洗、组装后直接注入（覆写）到前端的 `website/data.js` 中。这种架构使得未来的数据维护成本降到了最低（只需改文本文件）。

---

## 🕷️ 3. 爬虫与自动化 (反爬与 LLM 解析)

### 3.1 绕过 LMSYS 动态反爬
- **踩坑记录**：LMSYS Leaderboard 是一个基于 Gradio 构建的单页应用（SPA），普通的 `requests` 或 BeautifulSoup 抓取不到任何动态生成的表格数据。
- **降维打击**：放弃传统爬虫，直接采用官方的 `gradio_client` SDK。通过 WebSocket 接口底层通信，直通 Hugging Face Space，直接拉取到了干净的 Pandas DataFrame，彻底规避了网页 DOM 变动导致的爬虫失效。

### 3.2 缺失厂商信息的补全
- **难点**：LMSYS 官方 API 只返回“模型名”（如 `claude-3-opus`），没有公司名。
- **解决**：在 `sync_lmsys.py` 中编写了一套基于前缀的启发式映射字典（Heuristic Mapping），智能将模型名归属于 `Anthropic`, `OpenAI`, `Google` 等，确保表格信息的完整度。

---

## ⚙️ 4. CI/CD 与 GitHub Actions

### 4.1 打造零维护的“数据永动机”
- **任务编排**：利用 GitHub Actions 编写了 `.github/workflows/daily-sync.yml`。
- **定时触发**：配置了 `cron: '0 2 * * *'`（UTC 2:00，即北京时间 10:00）每日自动唤醒 Ubuntu 服务器。
- **自动编译与发布**：脚本会在云端顺序执行：装环境 -> 跑爬虫 (`sync_lmsys.py`) -> 跑编译 (`build_worker.py`) -> 提交到 `master` -> 拷贝生成的静态文件并强制 Push 到 `gh-pages` 分支完成上线。

### 4.2 GitHub 权限红线
- **避坑指南**：在 AI 代理（或第三方 OAuth App）尝试替用户推送带有修改 `.github/workflows/` 的 commit 时，会被 GitHub 官方无情拒绝（报错：`refusing to allow an OAuth App to create or update workflow without workflow scope`）。这是 GitHub 为了防止恶意篡改 CI/CD 流程的底线安全机制。
- **应对方式**：任何工作流（Workflow）的创建和修改，必须由仓库所有者（Owner）亲自通过网页端或具备完整 PAT (Personal Access Token) 权限的本地环境完成。

---

## 🔍 5. SEO 与流量获取

- **精准关键词部署**：摒弃花哨但无意义的标题，在 `README.md` 和 GitHub Repo Description 中部署了高度垂直的 SEO 关键词：`全球大模型AI排行 | 编程订阅 token / Coding Plan 价格指南`。
- **流量漏斗引导**：在项目主页最显眼的第一行（使用最大的 `H1` 标题），放置了直接跳转到 `gh-pages` 网页的**在线看板传送门**，最大程度降低用户的跳转摩擦力。

---

*这份日志见证了 All AI Top 50 从一个静态网页进化为现代化、自动化、工程化云端数据平台的完美历程！*
