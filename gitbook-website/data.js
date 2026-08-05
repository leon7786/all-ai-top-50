export const bookData = [
  {
    id: "intro",
    title: "1. 为什么需要 Coding Plan？",
    content: `
      <h2>Coding Plan 爆发的背景</h2>
      <p class="my-3">在 2026 年，随着 Cursor、Cline、Claude Code 等 AI 辅助编程工具的全面普及，开发者对大模型 API 的调用量呈现指数级增长。传统的按 Token 计费模式（Pay-as-you-go）在面对高频代码补全和重构任务时，账单极易失控。</p>
      <p class="my-3">因此，各大头部 AI 厂商纷纷推出了面向开发者的 <strong>Coding Plan（编程订阅套餐）</strong>，通过预付费或额度倍增的模式，为极客和企业开发者提供更具性价比的算力包。</p>
      <hr class="my-6">
      <h3>核心评测指标</h3>
      <ul class="list-disc pl-5 my-4">
        <li><strong>算力性价比：</strong> 单位价格能买到的有效代码生成行数或推理次数。</li>
        <li><strong>并发与稳定性：</strong> 在高峰期是否会被限流（Rate Limit）。</li>
        <li><strong>长上下文窗口：</strong> 处理整个项目代码库（Repository-level）的上下文能力。</li>
      </ul>
    `
  },
  {
    id: "openai",
    title: "2. OpenAI - 极客专属推理池",
    content: `
      <h2>OpenAI: ChatGPT Pro & Max 计划</h2>
      <p class="my-3">OpenAI 针对开发者推出了极高并发的专属推理池，主打 GPT-5.6 及其分支模型（Terra / Sol）。</p>
      <h3 class="mt-6 mb-2">套餐详解</h3>
      <div class="overflow-x-auto my-4 rounded-lg border">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-muted/50 border-b">
              <th class="p-3 text-left">计划名称</th>
              <th class="p-3 text-left border-l">价格</th>
              <th class="p-3 text-left border-l">核心价值</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3 font-bold">ChatGPT Plus</td>
              <td class="p-3 border-l text-muted-foreground whitespace-nowrap">¥144 / 月 ($20)</td>
              <td class="p-3 border-l text-muted-foreground">入门开发，解锁基础 GPT-5.6，额度极易耗尽。</td>
            </tr>
            <tr class="border-b bg-emerald-50/20">
              <td class="p-3 font-bold text-emerald-600">ChatGPT Pro</td>
              <td class="p-3 border-l text-emerald-600 font-medium whitespace-nowrap">¥1,440 / 月 ($200)</td>
              <td class="p-3 border-l"><strong>Plus 的 10 倍额度</strong>。专为全职开发者设计，高并发代码生成不断连。</td>
            </tr>
            <tr class="bg-emerald-100/20">
              <td class="p-3 font-bold text-emerald-700">ChatGPT Max</td>
              <td class="p-3 border-l text-emerald-700 font-medium whitespace-nowrap">¥2,880 / 月 ($400)</td>
              <td class="p-3 border-l"><strong>Plus 的 20 倍额度</strong>。独占 Sol 超级推理模式，解决核心架构级 Bug。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 class="mt-6">💡 实际价值点评</h3>
      <p class="my-3">如果你重度依赖 Cursor 的 Composer 功能进行全局重构，<strong>ChatGPT Pro</strong> 是性价比的甜点位。虽然表面看来 $200 很贵，但对比纯 API 每月可能高达 $500 的账单，实际上是“省钱”的。</p>
    `
  },
  {
    id: "anthropic",
    title: "3. Anthropic - 长文与代码王者",
    content: `
      <h2>Anthropic: Claude Max 与 Team</h2>
      <p class="my-3">由于 Claude 3.5 Sonnet 和如今的 Claude 5 系列在编程领域表现出的碾压级实力，Anthropic 的订阅计划一票难求。</p>
      <h3 class="mt-6 mb-2">套餐详解</h3>
      <div class="overflow-x-auto my-4 rounded-lg border">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-muted/50 border-b">
              <th class="p-3 text-left">计划名称</th>
              <th class="p-3 text-left border-l">价格</th>
              <th class="p-3 text-left border-l">核心价值</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-amber-50/20">
              <td class="p-3 font-bold text-amber-600">Claude Max 5x</td>
              <td class="p-3 border-l text-amber-600 font-medium whitespace-nowrap">¥720 / 月 ($100)</td>
              <td class="p-3 border-l">提供 Pro 版本 <strong>5倍</strong> 的会话上限，解锁顶级大杯 Fable 5。</td>
            </tr>
            <tr class="border-b bg-amber-100/20">
              <td class="p-3 font-bold text-amber-700">Claude Max 20x</td>
              <td class="p-3 border-l text-amber-700 font-medium whitespace-nowrap">¥1,440 / 月 ($200)</td>
              <td class="p-3 border-l">提供 Pro 版本 <strong>20倍</strong> 的会话上限，彻底放飞代码生成。</td>
            </tr>
            <tr class="bg-amber-50/10">
              <td class="p-3 font-bold text-amber-800">Team Premium</td>
              <td class="p-3 border-l text-amber-800 font-medium whitespace-nowrap">¥900 /席/月 ($125)</td>
              <td class="p-3 border-l">团队级共享算力，深度无缝集成 <strong>Claude Code</strong> 终端工具。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 class="mt-6">💡 实际价值点评</h3>
      <p class="my-3">对于独立开发者（Indie Hacker）而言，<strong>Claude Max 5x</strong> 几乎是闭眼入的选项。它完美平衡了成本与代码智能，且在长代码文件的增删改查上极少出现“幻觉”或截断。</p>
    `
  },
  {
    id: "zai",
    title: "4. Z.ai (智谱) - 国内开发者福音",
    content: `
      <h2>Z.ai: GLM Coding Plan</h2>
      <p class="my-3">作为国内模型的领军者，智谱针对开发者推出的 GLM Coding Plan 是 2026 年市场的破局者，通过极低的网络延迟和专属编程模型赢得了大量用户。</p>
      <h3 class="mt-6 mb-2">套餐详解</h3>
      <div class="overflow-x-auto my-4 rounded-lg border">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-muted/50 border-b">
              <th class="p-3 text-left">计划名称</th>
              <th class="p-3 text-left border-l">价格</th>
              <th class="p-3 text-left border-l">核心价值</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3 font-bold text-indigo-500">GLM Coding Lite</td>
              <td class="p-3 border-l text-indigo-500 font-medium whitespace-nowrap">¥118 / 月 ($18)</td>
              <td class="p-3 border-l">标准编程算力。对标国际 $20 档位，但在国内网络环境下速度更快。</td>
            </tr>
            <tr class="border-b bg-indigo-50/20">
              <td class="p-3 font-bold text-indigo-600">GLM Coding Pro</td>
              <td class="p-3 border-l text-indigo-600 font-medium whitespace-nowrap">¥590 / 月</td>
              <td class="p-3 border-l"><strong>Lite 的 5 倍额度</strong>。深度集成国内主流 IDE，支持多项目跨仓检索。</td>
            </tr>
            <tr class="bg-indigo-100/20">
              <td class="p-3 font-bold text-indigo-700">GLM Coding Max</td>
              <td class="p-3 border-l text-indigo-700 font-medium whitespace-nowrap">¥2,360 / 月</td>
              <td class="p-3 border-l"><strong>Lite 的 20 倍额度</strong>。提供专属物理机算力保障，适合大厂核心重构小队。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 class="mt-6">💡 实际价值点评</h3>
      <p class="my-3">如果你身处国内，网络环境受限，且希望项目代码数据不出境，<strong>GLM Coding Lite / Pro</strong> 是目前最强的国产平替选择，其代码理解能力已逼近 GPT-4 时代的巅峰水平。</p>
    `
  },
  {
    id: "summary",
    title: "5. 终极选型建议",
    content: `
      <h2>选购建议与价值排行</h2>
      <p class="my-3">综合各大厂牌的定价策略与实际写代码的体感，我们给出以下订阅建议：</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-4 border border-emerald-200 bg-emerald-50 rounded-xl dark:bg-emerald-950/30 dark:border-emerald-800">
          <h4 class="font-bold text-emerald-800 dark:text-emerald-300 mb-2">⭐ 独立开发者首选</h4>
          <p class="text-sm text-emerald-700 dark:text-emerald-400"><strong>Claude Max 5x ($100/月)</strong></p>
          <p class="text-xs mt-1 text-emerald-600/80 dark:text-emerald-500">强大的零样本代码生成与上下文记忆能力，省下的 Debug 时间远超 100 美元的时薪价值。</p>
        </div>
        <div class="p-4 border border-amber-200 bg-amber-50 rounded-xl dark:bg-amber-950/30 dark:border-amber-800">
          <h4 class="font-bold text-amber-800 dark:text-amber-300 mb-2">🚀 全职工程师 / 极客</h4>
          <p class="text-sm text-amber-700 dark:text-amber-400"><strong>ChatGPT Pro ($200/月)</strong></p>
          <p class="text-xs mt-1 text-amber-600/80 dark:text-amber-500">超高并发与极快的响应速度，配合 Cursor 能够实现肌肉记忆般的重构体验。</p>
        </div>
        <div class="p-4 border border-indigo-200 bg-indigo-50 rounded-xl dark:bg-indigo-950/30 dark:border-indigo-800">
          <h4 class="font-bold text-indigo-800 dark:text-indigo-300 mb-2">🔒 国内数据安全必选</h4>
          <p class="text-sm text-indigo-700 dark:text-indigo-400"><strong>GLM Coding Pro (¥590/月)</strong></p>
          <p class="text-xs mt-1 text-indigo-600/80 dark:text-indigo-500">无缝直连，拒绝网络波动卡顿，国产性价比之光。</p>
        </div>
        <div class="p-4 border border-slate-200 bg-slate-50 rounded-xl dark:bg-slate-900/30 dark:border-slate-800">
          <h4 class="font-bold text-slate-800 dark:text-slate-300 mb-2">💸 预算有限的学生党</h4>
          <p class="text-sm text-slate-700 dark:text-slate-400"><strong>DeepSeek API (按量付费)</strong></p>
          <p class="text-xs mt-1 text-slate-600/80 dark:text-slate-500">充值 50 块钱能用一个月，配合开源的本地插件，击穿底价。</p>
        </div>
      </div>
      <p class="text-sm text-muted-foreground mt-8 text-center border-t pt-4">© 2026 AI Top 50 Dashboard - Coding Plan Insights</p>
    `
  }
];
