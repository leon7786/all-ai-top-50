import { top50Data, pricingData, plansData } from './data.js';

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
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
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
        tr.className = "border-b border-muted/30 hover:bg-muted/30 transition-colors";
        
        let rankBadge = `<span class="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-muted-foreground bg-muted">${item.rank}</span>`;
        if (item.rank === 1) rankBadge = `<span class="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-yellow-800 bg-yellow-300 shadow-sm">1</span>`;
        if (item.rank === 2) rankBadge = `<span class="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-slate-700 bg-slate-200 shadow-sm">2</span>`;
        if (item.rank === 3) rankBadge = `<span class="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-orange-900 bg-orange-300 shadow-sm">3</span>`;

        const logoHtml = `<img src="${getLogoUrl(item.company)}" class="w-5 h-5 rounded-md shrink-0 bg-white shadow-sm" alt="logo" onerror="this.style.display='none'">`;

        tr.innerHTML = `
            <td class="py-1.5 px-3 align-middle text-center">${rankBadge}</td>
            <td class="py-1.5 px-3 align-middle">
                <a href="https://${companyDomains[item.company] || 'ai.com'}" target="_blank" class="flex justify-center items-center gap-2.5 hover:opacity-80 transition-opacity" title="访问 ${item.company} 官网">
                    ${logoHtml}
                    <span class="font-bold text-foreground text-xs tracking-wide uppercase hover:underline cursor-pointer">${item.company}</span>
                </a>
            </td>
            <td class="py-1.5 px-3 align-middle text-center font-semibold text-primary text-xs cursor-pointer hover:opacity-70 transition-opacity" title="点击复制" onclick="copyToClipboard('${item.model}', this)">${item.model}</td>
            <td class="py-1.5 px-3 align-middle text-center font-mono text-[11px] font-medium">${item.score}</td>
        `;
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
            input: `<span class="text-muted-foreground/40 font-normal">-</span>`,
            output: `<span class="font-bold text-foreground">${item.price}</span>`,
            note: item.users
        });
    });

    // Sort by company so their API and Plans are grouped together
    const companyOrder = ["OpenAI", "Anthropic", "Google", "xAI", "阿里", "Moonshot", "Z.ai", "MiniMax", "DeepSeek", "百度", "字节跳动", "小米", "腾讯", "Meta"];
    unifiedData.sort((a, b) => {
        let indexA = companyOrder.indexOf(a.company);
        let indexB = companyOrder.indexOf(b.company);
        if(indexA === -1) indexA = 99;
        if(indexB === -1) indexB = 99;
        
        if (indexA !== indexB) return indexA - indexB;
        // Same company, put APIs first, then Plans
        if (a.type !== b.type) return a.type === "API" ? -1 : 1;
        return 0;
    });

    const unifiedTbody = document.getElementById('unified-pricing-tbody');
    unifiedData.forEach(item => {
        const tr = document.createElement('tr');
        const bgClass = companyColors[item.company] || "bg-transparent";
        tr.className = `border-b border-muted/30 hover:bg-muted/50 transition-colors ${bgClass}`;
        
        const typeBadge = item.type === "API" 
            ? `<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">API</span>`
            : `<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">套餐</span>`;

        const logoHtml = `<img src="${getLogoUrl(item.company)}" class="w-6 h-6 rounded-md shrink-0 bg-white shadow-sm" alt="logo" onerror="this.style.display='none'">`;

        tr.innerHTML = `
            <td class="py-1.5 px-4 align-middle">
                <a href="https://${companyDomains[item.company] || 'ai.com'}" target="_blank" class="flex items-center gap-2.5 hover:opacity-80 transition-opacity" title="访问 ${item.company} 官网">
                    ${logoHtml}
                    <span class="font-bold text-xs uppercase tracking-wide text-foreground hover:underline cursor-pointer">${item.company}</span>
                </a>
            </td>
            <td class="py-1.5 px-3 align-middle">${typeBadge}</td>
            <td class="py-1.5 px-3 align-middle font-bold text-primary text-xs cursor-pointer hover:opacity-70 transition-opacity" title="点击复制" onclick="copyToClipboard('${item.product}', this)">${item.product}</td>
            <td class="py-1.5 px-3 align-middle text-right font-semibold text-emerald-600 whitespace-nowrap text-xs">${item.input}</td>
            <td class="py-1.5 px-3 align-middle text-right font-semibold text-rose-600 whitespace-nowrap text-xs">${item.output}</td>
            <td class="py-1.5 px-4 align-middle text-muted-foreground text-xs max-w-[280px] leading-snug">${item.note}</td>
        `;
        unifiedTbody.appendChild(tr);
    });

});
