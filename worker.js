export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI大模型深度报告 2026</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: ["class"],
        theme: {
          extend: {
            colors: {
              border: "hsl(var(--border))",
              input: "hsl(var(--input))",
              ring: "hsl(var(--ring))",
              background: "hsl(var(--background))",
              foreground: "hsl(var(--foreground))",
              primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
              secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
              destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
              muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
              accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
              card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
            }
          }
        }
      }
    </script>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;700;800;900&display=swap');

:root {
  --background: 210 40% 98%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --border: 214.3 31.8% 91.4%;
}

body {
  font-family: 'Inter', sans-serif;
  color: hsl(var(--foreground));
  -webkit-font-smoothing: antialiased;
  background-color: #f8fafc;
}

/* Animated Mesh Gradient Background */
.bg-animated {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  z-index: -1;
  background: 
    radial-gradient(circle at 10% 20%, rgba(199, 210, 254, 0.45) 0%, transparent 40%),
    radial-gradient(circle at 90% 10%, rgba(252, 231, 243, 0.45) 0%, transparent 40%),
    radial-gradient(circle at 50% 80%, rgba(186, 230, 253, 0.45) 0%, transparent 40%);
  background-size: 100% 100%;
  animation: bgShift 15s ease-in-out infinite alternate;
}

@keyframes bgShift {
  0% { transform: scale(1); }
  50% { transform: scale(1.1) translate(2%, 2%); }
  100% { transform: scale(1) translate(-2%, -2%); }
}

h1, h2, h3, .font-outfit {
  font-family: 'Outfit', sans-serif;
}

/* Premium Glassmorphism Cards */
.glass-card {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 
    0 20px 40px -15px rgba(0, 0, 0, 0.05), 
    0 10px 15px -3px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 1);
}

/* Smooth Table Row Hover */
.table-row-hover {
  transition: all 0.2s ease-out;
}
.table-row-hover:hover {
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

/* Gradient Text for Main Title */
.text-gradient {
  background: linear-gradient(135deg, #2563eb, #8b5cf6, #db2777);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradientText 5s ease infinite;
}

@keyframes gradientText {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.12);
  border-radius: 9999px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0.25);
}

/* Staggered Entry Animation */
.animate-fade-in {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(20px);
}
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
</head>
<body class="bg-background text-foreground h-screen w-full flex flex-col items-center overflow-hidden">
    <div class="bg-animated"></div>
    <div class="w-full max-w-screen-2xl h-full flex flex-col p-4 md:p-6 md:py-8 gap-6 min-h-0">
    <!-- Header -->
    <div class="flex justify-between items-end shrink-0 px-2 animate-fade-in">
        <div>
            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient pb-1">AI 枢纽 2026：全球顶级大模型全景图</h1>
            <p class="text-sm text-muted-foreground mt-2 font-medium">数据截至2026下半年 | 综合排名与资费全景概览</p>
        </div>
    </div>

    <!-- Main Layout (Full height flex with internal scroll) -->
    <div class="flex-1 grid grid-cols-1 xl:grid-cols-[40%_60%] gap-6 min-h-0">
        
        <!-- Left Column: Top 50 -->
        <div class="glass-card rounded-2xl text-card-foreground flex flex-col min-h-0 relative overflow-hidden animate-fade-in delay-100">
            <div class="px-6 py-5 border-b border-white/40 shrink-0 bg-white/40 z-20 flex justify-between items-center">
                <h3 class="text-lg font-bold font-outfit text-slate-800">🏆 全球最强 AI 模型综合能力排名</h3>
                <a href="https://huggingface.co/spaces/lmarena-ai/arena-leaderboard" target="_blank" class="text-[10px] text-muted-foreground hover:text-foreground bg-muted px-2 py-1 rounded shadow-sm border transition-colors hover:bg-muted/80" title="访问 LMSYS Leaderboard">来源：arena-leaderboard</a>
            </div>
            <div class="flex-1 overflow-y-auto custom-scrollbar relative z-0">
                <table class="w-full text-sm">
                    <thead class="[&_tr]:border-b sticky top-0 bg-card/95 backdrop-blur z-10 shadow-sm">
                        <tr class="text-muted-foreground">
                            <th class="h-8 px-4 text-center font-medium whitespace-nowrap w-max">排名</th>
                            <th class="h-8 px-4 text-left font-medium whitespace-nowrap w-max">厂商</th>
                            <th class="h-8 px-4 text-left font-medium whitespace-nowrap w-max">模型名称</th>
                            <th class="h-8 px-4 text-left font-medium whitespace-nowrap w-max">综合 Score</th>
                            <th class="w-full"></th>
                        </tr>
                    </thead>
                    <tbody id="top50-tbody" class="[&_tr:last-child]:border-0">
                        <!-- JS Inject -->
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Right Column: Unified Pricing & Plans -->
        <div class="glass-card rounded-2xl text-card-foreground flex flex-col min-h-0 relative overflow-hidden animate-fade-in delay-200">
            <div class="px-6 py-5 border-b border-white/40 shrink-0 bg-white/40 z-20">
                <h3 class="text-lg font-bold font-outfit text-slate-800">💳 API 计费 & 订阅套餐总览 <span class="text-[13px] font-normal text-slate-500 ml-1">(单位：人民币 / 美金)</span></h3>
            </div>
            <div class="flex-1 overflow-y-auto custom-scrollbar relative z-0">
                <table class="w-full text-sm">
                    <thead class="[&_tr]:border-b sticky top-0 bg-card/95 backdrop-blur z-10 shadow-sm">
                        <tr class="text-muted-foreground">
                            <th class="h-8 px-4 text-left font-medium whitespace-nowrap w-max">厂商</th>
                            <th class="h-8 px-4 text-left font-medium whitespace-nowrap w-max">类型</th>
                            <th class="h-8 px-4 text-left font-medium whitespace-nowrap w-max">产品 / 模型</th>
                            <th class="h-8 px-4 text-left font-medium whitespace-nowrap w-max">输入 (¥/1M)</th>
                            <th class="h-8 px-4 text-left font-medium whitespace-nowrap w-max">输出 / 月租</th>
                            <th class="h-8 px-4 text-left font-medium w-full">核心权益 / 备注</th>
                        </tr>
                    </thead>
                    <tbody id="unified-pricing-tbody" class="[&_tr:last-child]:border-0">
                        <!-- JS Inject -->
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    </div>

    <script>
const top50Data = [
  {"rank": 1, "model": "claude-fable-5", "company": "Anthropic", "score": "1509 ±6"},
  {"rank": 2, "model": "claude-opus-4-6-thinking", "company": "Anthropic", "score": "1505 ±4"},
  {"rank": 3, "model": "claude-opus-4-7-thinking", "company": "Anthropic", "score": "1502 ±4"},
  {"rank": 4, "model": "claude-opus-4-6", "company": "Anthropic", "score": "1497 ±4"},
  {"rank": 5, "model": "qwen3.8-max", "company": "阿里", "score": "1496 ±10"},
  {"rank": 6, "model": "claude-opus-4-7", "company": "Anthropic", "score": "1492 ±4"},
  {"rank": 7, "model": "claude-opus-5-high", "company": "Anthropic", "score": "1492 ±6"},
  {"rank": 8, "model": "claude-opus-5-max", "company": "Anthropic", "score": "1490 ±9"},
  {"rank": 9, "model": "muse-spark-1.1", "company": "Meta", "score": "1490 ±6"},
  {"rank": 10, "model": "muse-spark", "company": "Meta", "score": "1488 ±6"},
  {"rank": 11, "model": "gemini-3-pro", "company": "Google", "score": "1486 ±4"},
  {"rank": 12, "model": "gemini-3.1-pro-preview", "company": "Google", "score": "1485 ±3"},
  {"rank": 13, "model": "kimi-k3-max", "company": "Moonshot", "score": "1485 ±10"},
  {"rank": 14, "model": "claude-opus-4-8-thinking", "company": "Anthropic", "score": "1484 ±5"},
  {"rank": 15, "model": "gpt-5.6-sol-xhigh", "company": "OpenAI", "score": "1483 ±6"},
  {"rank": 16, "model": "gemini-3.6-flash", "company": "Google", "score": "1483 ±7"},
  {"rank": 17, "model": "gpt-5.5-high", "company": "OpenAI", "score": "1482 ±4"},
  {"rank": 18, "model": "gpt-5.4-high", "company": "OpenAI", "score": "1477 ±4"},
  {"rank": 19, "model": "gemini-3.6-flash-high", "company": "Google", "score": "1476 ±7"},
  {"rank": 20, "model": "gpt-5.5", "company": "OpenAI", "score": "1476 ±4"},
  {"rank": 21, "model": "gpt-5.2-chat-latest-20260210", "company": "OpenAI", "score": "1476 ±4"},
  {"rank": 22, "model": "gemini-3.6-flash-lite", "company": "Google", "score": "1475 ±6"},
  {"rank": 23, "model": "qwen3.7-max-preview", "company": "阿里", "score": "1475 ±10"},
  {"rank": 24, "model": "claude-opus-4-8", "company": "Anthropic", "score": "1475 ±5"},
  {"rank": 25, "model": "grok-4.20-beta1", "company": "xAI", "score": "1474 ±5"},
  {"rank": 26, "model": "gemini-3.6-flash-medium", "company": "Google", "score": "1474 ±5"},
  {"rank": 27, "model": "gpt-5.5-instant", "company": "OpenAI", "score": "1473 ±5"},
  {"rank": 28, "model": "gemini-3-flash", "company": "Google", "score": "1473 ±4"},
  {"rank": 29, "model": "claude-opus-4-5-20251101-thinking-32k", "company": "Anthropic", "score": "1473 ±4"},
  {"rank": 30, "model": "grok-4.20-beta-0309-reasoning", "company": "xAI", "score": "1472 ±4"},
  {"rank": 31, "model": "claude-sonnet-4-6", "company": "Anthropic", "score": "1472 ±4"},
  {"rank": 32, "model": "grok-4.20-multi-agent-beta-0309", "company": "xAI", "score": "1471 ±4"},
  {"rank": 33, "model": "glm-5.2-max", "company": "Z.ai", "score": "1469 ±5"},
  {"rank": 34, "model": "claude-opus-4-5-20251101", "company": "Anthropic", "score": "1469 ±3"},
  {"rank": 35, "model": "grok-4.5", "company": "xAI", "score": "1469 ±6"},
  {"rank": 36, "model": "glm-5.1", "company": "Z.ai", "score": "1469 ±4"},
  {"rank": 37, "model": "gpt-5.6-terra-xhigh", "company": "OpenAI", "score": "1468 ±6"},
  {"rank": 38, "model": "ernie-5.1", "company": "百度", "score": "1468 ±5"},
  {"rank": 39, "model": "grok-4.1-thinking", "company": "xAI", "score": "1466 ±3"},
  {"rank": 40, "model": "mimo-v2.5-pro", "company": "小米", "score": "1466 ±4"},
  {"rank": 41, "model": "gpt-5.4", "company": "OpenAI", "score": "1465 ±4"},
  {"rank": 42, "model": "qwen3.5-max-preview", "company": "阿里", "score": "1465 ±5"},
  {"rank": 43, "model": "claude-sonnet-5-high", "company": "Anthropic", "score": "1462 ±6"},
  {"rank": 44, "model": "kimi-k2.6", "company": "Moonshot", "score": "1461 ±5"},
  {"rank": 45, "model": "qwen3.6-max-preview", "company": "阿里", "score": "1460 ±8"},
  {"rank": 46, "model": "grok-4.1", "company": "xAI", "score": "1459 ±3"},
  {"rank": 47, "model": "qwen3.7-plus", "company": "阿里", "score": "1459 ±5"},
  {"rank": 48, "model": "gemini-3-flash (thinking-minimal)", "company": "Google", "score": "1459 ±3"},
  {"rank": 49, "model": "deepseek-v4-pro", "company": "DeepSeek", "score": "1458 ±4"},
  {"rank": 50, "model": "glm-5", "company": "Z.ai", "score": "1457 ±4"}
];

const pricingData = [
  {"company": "OpenAI", "model": "GPT-5.6 Sol", "input": "¥36.0", "output": "¥216.0", "note": "旗舰深度推理模型"},
  {"company": "OpenAI", "model": "GPT-5.6 Terra", "input": "¥14.4", "output": "¥86.4", "note": "面向企业日常高并发任务"},
  {"company": "OpenAI", "model": "GPT-5.6 Luna", "input": "¥1.44", "output": "¥8.64", "note": "7月降价80%，主打极速轻量应用"},
  {"company": "Anthropic", "model": "Claude Fable 5", "input": "¥72.0", "output": "¥360.0", "note": "新一代长效 Agent 顶配模型"},
  {"company": "Anthropic", "model": "Claude Opus 5", "input": "¥36.0", "output": "¥180.0", "note": "复杂代码与企业级分析"},
  {"company": "Anthropic", "model": "Claude Sonnet 5", "input": "¥14.4", "output": "¥72.0", "note": "主力性价比模型"},
  {"company": "Google", "model": "Gemini 3.6 Flash", "input": "¥10.8", "output": "¥64.8", "note": "高速低延迟模型"},
  {"company": "Google", "model": "Gemini 3-Pro 系列", "input": "~¥25.2", "output": "~¥108.0", "note": "高级多模态分析与生成"},
  {"company": "xAI", "model": "Grok 4.20", "input": "¥18.7", "output": "¥56.1", "note": "2M 超长上下文，支持实时数据"},
  {"company": "xAI", "model": "Grok 4.5", "input": "¥14.4", "output": "¥43.2", "note": "基础版高速模型"},
  {"company": "阿里", "model": "Qwen3.8-Max", "input": "¥20.0", "output": "¥60.0", "note": "阿里云百炼平台计费，支持模型降价"},
  {"company": "阿里", "model": "Qwen 3.7", "input": "¥12.0", "output": "¥36.0", "note": "上一代模型，极高性价比"},
  {"company": "阿里", "model": "Qwen3.5-Plus", "input": "¥0.8", "output": "¥2.0", "note": "高频调用性价比极高"},
  {"company": "Moonshot", "model": "Kimi K3-Max", "input": "¥20.0", "output": "¥100.0", "note": "缓存命中时输入可降至 ¥2.0/百万"},
  {"company": "Z.ai", "model": "GLM-5.2-Max", "input": "~¥4.3", "output": "~¥10.8", "note": "国内模型 API 的“性价比屠夫”之一"},
  {"company": "DeepSeek", "model": "DeepSeek-V4-Pro", "input": "¥12.5", "output": "¥25.0", "note": "默认开启思维链（思考 Token 按输出计）"},
  {"company": "DeepSeek", "model": "DeepSeek-V4-Flash", "input": "¥1.0", "output": "¥2.0", "note": "缓存命中时输入仅需 ¥0.02/百万"},
  {"company": "百度", "model": "Ernie-5.1 (旗舰)", "input": "¥30.0", "output": "¥90.0", "note": "百度千帆大模型平台旗舰定价"},
  {"company": "字节跳动", "model": "Doubao-Seed-2.0-Pro", "input": "¥0.8", "output": "¥2.0", "note": "延续火山引擎的“击穿底价”策略"},
  {"company": "腾讯", "model": "Hunyuan 3 (混元)", "input": "¥30.0", "output": "¥100.0", "note": "面向政企及高复杂应用场景"},
  {"company": "Meta", "model": "Muse Spark 1.1", "input": "¥9.0 ($1.25)", "output": "¥30.6 ($4.25)", "note": "26年7月发布，具备 1M 上下文及智能体能力"}
];

const plansData = [
  {"company": "OpenAI", "plan": "ChatGPT Plus", "price": "¥144 /月 ($20)", "users": "基础个人用户 (标准额度)；解锁 GPT-5.6/Terra"},
  {"company": "OpenAI", "plan": "ChatGPT Team", "price": "¥180 /席/月 ($25)", "users": "协作团队 (Plus额度的2倍)；不用于模型训练"},
  {"company": "OpenAI", "plan": "ChatGPT Pro", "price": "¥1,440 /月 ($200)", "users": "极客开发者 (Plus额度的10倍)；高并发推理模式"},
  {"company": "OpenAI", "plan": "ChatGPT Max", "price": "¥2,880 /月 ($400)", "users": "顶级开发者 (Plus额度的20倍)；独占 Sol 超级推理"},
  {"company": "Anthropic", "plan": "Claude Pro", "price": "¥144 /月 ($20)", "users": "个人主力 (标准额度)；解锁 Opus 5、Sonnet 5"},
  {"company": "Anthropic", "plan": "Claude Max 5x", "price": "¥720 /月 ($100)", "users": "高阶玩家 (Pro额度的5倍)；解锁顶级 Fable 5"},
  {"company": "Anthropic", "plan": "Claude Max 20x", "price": "¥1,440 /月 ($200)", "users": "极客玩家 (Pro额度的20倍)；解锁顶级 Fable 5"},
  {"company": "Anthropic", "plan": "Claude Team Premium", "price": "¥900 /席/月 ($125)", "users": "研发工程团队 (Pro额度的6倍)；深度集成 Code"},
  {"company": "Google", "plan": "Google One AI Premium", "price": "¥144 /月 ($20)", "users": "个人用户 (标准额度)；无缝集成 Gemini 3-Pro"},
  {"company": "Google", "plan": "Google AI Studio Pro", "price": "¥720 /月 ($100)", "users": "专业开发者 (Premium额度的5倍)；不限量 Flash"},
  {"company": "xAI", "plan": "X Premium", "price": "¥58 /月 ($8)", "users": "Twitter基础会员 (标准额度)；解锁 Grok 4.5"},
  {"company": "xAI", "plan": "X Premium+", "price": "¥115 /月 ($16)", "users": "重度用户 (Premium额度的3倍)；解锁 Grok 4.20"},
  {"company": "阿里", "plan": "百炼平台 Lite 版", "price": "¥39 /月", "users": "入门开发者 (标准额度)；含基础 Qwen 抵扣包"},
  {"company": "阿里", "plan": "百炼平台 Standard版", "price": "¥139 /月", "users": "中小型企业 (Lite额度的4倍)；专属算力调配"},
  {"company": "阿里", "plan": "百炼平台 Pro 版", "price": "¥499 /月", "users": "大企业应用 (Lite额度的15倍)；含高级 Max 系列"},
  {"company": "Moonshot", "plan": "Kimi Plus", "price": "¥39 /月", "users": "基础用户 (标准额度)；高峰期优先调用保障"},
  {"company": "Moonshot", "plan": "Kimi Pro", "price": "¥149 /月", "users": "深度创作者 (Plus额度的5倍)；长文深度推理模式"},
  {"company": "MiniMax", "plan": "海螺 AI Plus", "price": "¥30 /月", "users": "基础用户 (标准额度)；全功能无限制访问"},
  {"company": "MiniMax", "plan": "海螺 AI Pro", "price": "¥120 /月", "users": "极客用户 (Plus额度的4倍)；专属复杂 Agent 任务池"},
  {"company": "Z.ai", "plan": "智谱网页 VIP", "price": "¥79 /月", "users": "基础用户 (标准额度)；长文档与 AI 绘画加速"},
  {"company": "Z.ai", "plan": "智谱网页 SVIP", "price": "¥229 /月", "users": "专业用户 (VIP额度的3倍)；数据分析与专属智能体"},
  {"company": "Z.ai", "plan": "GLM Coding Lite", "price": "¥118 /月 ($18)", "users": "入门开发者 (标准额度)；专用编程模型推理"},
  {"company": "Z.ai", "plan": "GLM Coding Pro", "price": "¥590 /月", "users": "极客开发者 (Lite额度的5倍)；深度集成开发工具"},
  {"company": "Z.ai", "plan": "GLM Coding Max", "price": "¥2,360 /月", "users": "顶级开发者 (Lite额度的20倍)；高并发专有算力"},
  {"company": "Meta", "plan": "Meta One Plus", "price": "¥58 /月 ($7.99)", "users": "基础个人用户 (标准额度)；高算力推理与生成"},
  {"company": "Meta", "plan": "Meta One Premium", "price": "¥144 /月 ($19.99)", "users": "高级用户 (Plus额度的3倍)；解锁深度思维模式 (Thinking)"},
  {"company": "DeepSeek", "plan": "/（纯后付费模式）", "price": "无固定月租", "users": "完全“Pay-as-you-go”计费，无上限 (按量计算)"}
];



// Map companies to domains for fetching real logos via Google Favicon API
const companyDomains = {
  "OpenAI": "openai.com",
  "Anthropic": "anthropic.com",
  "Google": "google.com",
  "xAI": "x.ai",
  "Meta": "meta.com",
  "阿里": "aliyun.com",
  "Z.ai": "zhipuai.cn",
  "Moonshot": "moonshot.cn",
  "DeepSeek": "deepseek.com",
  "MiniMax": "minimaxi.com",
  "百度": "baidu.com",
  "字节跳动": "bytedance.com",
  "小米": "mi.com",
  "腾讯": "tencent.com"
};

const companyColors = {
  "OpenAI": "bg-emerald-50/40",
  "Anthropic": "bg-amber-50/40",
  "Google": "bg-blue-50/40",
  "xAI": "bg-slate-100/50",
  "阿里": "bg-orange-50/40",
  "Moonshot": "bg-cyan-50/40",
  "Z.ai": "bg-indigo-50/40",
  "MiniMax": "bg-rose-50/40",
  "DeepSeek": "bg-blue-50/30",
  "百度": "bg-red-50/30",
  "字节跳动": "bg-violet-50/30",
  "小米": "bg-orange-50/30",
  "腾讯": "bg-sky-50/30",
  "Meta": "bg-blue-50/20"
};

function getLogoUrl(company) {
    const domain = companyDomains[company] || "ai.com";
    return \`https://www.google.com/s2/favicons?domain=\${domain}&sz=64\`;
}

document.addEventListener('DOMContentLoaded', () => {
    window.copyToClipboard = function(text, el) {
        navigator.clipboard.writeText(text).then(() => {
            const originalText = el.innerText;
            el.innerText = '已复制!';
            el.classList.add('text-emerald-500');
            setTimeout(() => {
                el.innerText = originalText;
                el.classList.remove('text-emerald-500');
            }, 1000);
        }).catch(err => {
            console.error('Copy failed', err);
        });
    };

    // -------------------------
    // 1. Populate Top 50 Table
    // -------------------------
    const top50Tbody = document.getElementById('top50-tbody');
    
    top50Data.forEach(item => {
        const tr = document.createElement('tr');
        tr.className = "border-b border-slate-200/60 table-row-hover";
        
        let rankBadge = \`<span class="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-muted-foreground bg-muted">\${item.rank}</span>\`;
        if (item.rank === 1) rankBadge = \`<span class="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-yellow-800 bg-yellow-300 shadow-sm">1</span>\`;
        if (item.rank === 2) rankBadge = \`<span class="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-slate-700 bg-slate-200 shadow-sm">2</span>\`;
        if (item.rank === 3) rankBadge = \`<span class="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-orange-900 bg-orange-300 shadow-sm">3</span>\`;

        const logoHtml = \`<img src="\${getLogoUrl(item.company)}" class="w-5 h-5 rounded-md shrink-0 bg-white shadow-sm" alt="logo" onerror="this.style.display='none'">\`;

        tr.innerHTML = \`
            <td class="py-1.5 px-4 align-middle text-center whitespace-nowrap w-max">\${rankBadge}</td>
            <td class="py-1.5 px-4 align-middle whitespace-nowrap w-max">
                <a href="https://\${companyDomains[item.company] || 'ai.com'}" target="_blank" class="flex items-center gap-2 hover:opacity-80 transition-opacity" title="访问 \${item.company} 官网">
                    \${logoHtml}
                    <span class="font-bold text-foreground text-xs tracking-wide uppercase hover:underline cursor-pointer">\${item.company}</span>
                </a>
            </td>
            <td class="py-1.5 px-4 align-middle text-left font-semibold text-primary text-xs cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap w-max" title="点击复制" onclick="copyToClipboard('\${item.model}', this)">\${item.model}</td>
            <td class="py-1.5 px-4 align-middle text-left font-mono text-[11px] font-medium whitespace-nowrap w-max">\${item.score}</td>
            <td class="w-full"></td>
        \`;
        top50Tbody.appendChild(tr);
    });

    // ---------------------------------------------
    // 2. Prepare and Populate Unified Pricing Table
    // ---------------------------------------------
    const unifiedData = [];

    pricingData.forEach(item => {
        unifiedData.push({
            type: "API",
            company: item.company,
            product: item.model,
            input: item.input,
            output: item.output,
            note: item.note
        });
    });

    plansData.forEach(item => {
        unifiedData.push({
            type: "订阅",
            company: item.company,
            product: item.plan,
            input: \`<span class="text-muted-foreground/40 font-normal">-</span>\`,
            output: \`<span class="font-bold text-foreground">\${item.price}</span>\`,
            note: item.users
        });
    });

    // Sort by Region -> Capability Rank -> Company -> Type
    const domesticList = ["阿里", "Moonshot", "Z.ai", "MiniMax", "DeepSeek", "百度", "字节跳动", "小米", "腾讯"];
    const companyBestRank = {};
    top50Data.forEach(item => {
        if (!companyBestRank[item.company] || item.rank < companyBestRank[item.company]) {
            companyBestRank[item.company] = item.rank;
        }
    });

    unifiedData.forEach(item => {
        item.region = domesticList.includes(item.company) ? "国内大模型厂商" : "国际顶级 AI 厂商";
        item.bestRank = companyBestRank[item.company] || 999;
    });

    unifiedData.sort((a, b) => {
        // 1. Region
        if (a.region !== b.region) {
            return a.region === "国际顶级 AI 厂商" ? -1 : 1;
        }
        // 2. Capability (bestRank)
        if (a.bestRank !== b.bestRank) {
            return a.bestRank - b.bestRank;
        }
        // 3. Keep APIs and Plans of the same company together
        if (a.company !== b.company) {
            return a.company.localeCompare(b.company);
        }
        // 4. Type (API first)
        if (a.type !== b.type) return a.type === "API" ? -1 : 1;
        return 0;
    });

    const unifiedTbody = document.getElementById('unified-pricing-tbody');
    let currentRegion = "";

    unifiedData.forEach(item => {
        if (item.region !== currentRegion) {
            currentRegion = item.region;
            const sepTr = document.createElement('tr');
            sepTr.className = "bg-white/60 backdrop-blur-md font-bold text-slate-800 text-[13px] border-b border-slate-200/80 shadow-[0_4px_10px_rgba(0,0,0,0.02)] sticky top-8 z-10";
            sepTr.innerHTML = \`<td colspan="6" class="py-2.5 px-6"><div class="flex items-center gap-2"><span class="w-1.5 h-4 bg-blue-500 rounded-full"></span>\${currentRegion} <span class="text-xs font-normal text-slate-500 ml-2">(已按各厂最高模型能力排行)</span></div></td>\`;
            unifiedTbody.appendChild(sepTr);
        }

        const tr = document.createElement('tr');
        const bgClass = companyColors[item.company] || "bg-transparent";
        tr.className = \`border-b border-slate-200/50 table-row-hover \${bgClass}\`;
        
        const typeBadge = item.type === "API" 
            ? \`<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">API</span>\`
            : \`<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">套餐</span>\`;

        const logoHtml = \`<img src="\${getLogoUrl(item.company)}" class="w-6 h-6 rounded-md shrink-0 bg-white shadow-sm" alt="logo" onerror="this.style.display='none'">\`;

        tr.innerHTML = \`
            <td class="py-1.5 px-4 align-middle whitespace-nowrap w-max">
                <a href="https://\${companyDomains[item.company] || 'ai.com'}" target="_blank" class="flex items-center gap-2.5 hover:opacity-80 transition-opacity" title="访问 \${item.company} 官网">
                    \${logoHtml}
                    <span class="font-bold text-xs uppercase tracking-wide text-foreground hover:underline cursor-pointer">\${item.company}</span>
                </a>
            </td>
            <td class="py-1.5 px-4 align-middle whitespace-nowrap w-max">\${typeBadge}</td>
            <td class="py-1.5 px-4 align-middle font-bold text-primary text-xs cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap w-max" title="点击复制" onclick="copyToClipboard('\${item.product}', this)">\${item.product}</td>
            <td class="py-1.5 px-4 align-middle text-left font-semibold text-emerald-600 whitespace-nowrap text-xs w-max">\${item.input}</td>
            <td class="py-1.5 px-4 align-middle text-left font-semibold text-rose-600 whitespace-nowrap text-xs w-max">\${item.output}</td>
            <td class="py-1.5 px-4 align-middle text-muted-foreground text-xs w-full leading-snug">\${item.note}</td>
        \`;
        unifiedTbody.appendChild(tr);
    });

});

</script>
</body>
</html>
`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
