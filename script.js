// AI 艺术作品生成器
const canvas = document.getElementById('art-canvas');
const generateArtBtn = document.getElementById('generate-art');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

function generateAIArt() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 随机生成艺术图案
    const colors = ['#667eea', '#764ba2', '#f59e0b', '#ef4444', '#10b981', '#06b6d4'];
    
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 30 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        
        // 添加随机线条
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.strokeStyle = color;
        ctx.lineWidth = Math.random() * 3;
        ctx.stroke();
    }
}

generateArtBtn.addEventListener('click', generateAIArt);
generateAIArt(); // 初始生成

// AI 对话模拟
const userInput = document.getElementById('user-input');
const sendMessageBtn = document.getElementById('send-message');
const aiResponse = document.getElementById('ai-response');

const aiResponses = [
    "你好！我是AI助手，可以自动生成网页代码",
    "我正在实时修改这个网页，你可以随时看到变化",
    "这种交互展示了AI的创造力和灵活性",
    "通过手机端指挥，我可以为你创造任何功能",
    "这个网页是由AI完全自动生成和更新的",
    "你看，AI不仅能回答问题，还能写代码",
    "这是真正的AI动态开发演示",
    "只需一个指令，我就能修改整个页面"
];

function generateAIResponse() {
    const userText = userInput.value.trim();
    let response;
    
    if (userText) {
        if (userText.toLowerCase().includes('ai') || userText.toLowerCase().includes('智能')) {
            response = "AI技术让网页开发变得如此简单！我可以实时响应你的指令";
        } else if (userText.toLowerCase().includes('代码') || userText.toLowerCase().includes('开发')) {
            response = "是的，我正在编写代码，这是AI自动生成的JavaScript";
        } else {
            response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        }
    } else {
        response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
    }
    
    aiResponse.textContent = response;
    addLogEntry(`AI回复: "${response}"`);
}

sendMessageBtn.addEventListener('click', generateAIResponse);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') generateAIResponse();
});

// AI 诗词生成
const generatePoetryBtn = document.getElementById('generate-poetry');
const poetryContent = document.getElementById('poetry-content');

const poetryLines = [
    "智能之光照亮夜空，代码编织梦想之旅",
    "AI之笔描绘未来，科技之魂飞跃时空",
    "星辰指引创新路，智能开辟新篇章",
    "算法似诗般优雅，代码如画般绚烂",
    "电子之海深且广，人工智能显神威",
    "创造力源源不绝，创新力永不止步",
    "数据化作诗歌韵律，代码变成艺术表达"
];

function generatePoetry() {
    const poetry = [];
    for (let i = 0; i < 3; i++) {
        poetry.push(poetryLines[Math.floor(Math.random() * poetryLines.length)]);
    }
    poetryContent.textContent = poetry.join('\n\n');
    addLogEntry('AI生成诗词');
}

generatePoetryBtn.addEventListener('click', generatePoetry);
generatePoetry(); // 初始生成

// 动态背景效果
const bgCanvas = document.getElementById('bg-canvas');
const bgModeBtn = document.getElementById('bg-mode');
const bgModeName = document.getElementById('bg-mode-name');

const bgModes = ['彩虹波纹', '星空闪烁', '粒子动画', '渐变流动'];
let currentBgMode = 0;

function createBackgroundAnimation() {
    bgCanvas.innerHTML = '';
    bgCanvas.style.position = 'relative';
    
    if (bgModes[currentBgMode] === '彩虹波纹') {
        for (let i = 0; i < 20; i++) {
            const circle = document.createElement('div');
            circle.className = 'bg-circle';
            circle.style.width = `${Math.random() * 60 + 20}px`;
            circle.style.height = `${Math.random() * 60 + 20}px`;
            circle.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
            circle.style.position = 'absolute';
            circle.style.top = `${Math.random() * 100}%`;
            circle.style.left = `${Math.random() * 100}%`;
            circle.style.borderRadius = '50%';
            bgCanvas.appendChild(circle);
        }
    }
    
    bgModeName.textContent = bgModes[currentBgMode];
}

bgModeBtn.addEventListener('click', () => {
    currentBgMode = (currentBgMode + 1) % bgModes.length;
    createBackgroundAnimation();
    addLogEntry(`切换背景模式: ${bgModes[currentBgMode]}`);
});

createBackgroundAnimation();

// AI控制面板
const aiRefreshBtn = document.getElementById('ai-refresh');
const aiCustomizeBtn = document.getElementById('ai-customize');
const aiReportBtn = document.getElementById('ai-report');
const aiRandomBtn = document.getElementById('ai-random');
const logList = document.getElementById('log-list');

function addLogEntry(text) {
    const li = document.createElement('li');
    li.textContent = `${new Date().toLocaleTimeString('zh-CN')}: ${text}`;
    logList.appendChild(li);
}

aiRefreshBtn.addEventListener('click', () => {
    generateAIArt();
    generatePoetry();
    createBackgroundAnimation();
    addLogEntry('AI刷新所有功能');
});

aiCustomizeBtn.addEventListener('click', () => {
    const colors = ['#667eea', '#764ba2', '#f59e0b', '#ef4444', '#10b981'];
    document.body.style.background = `linear-gradient(135deg, ${colors[Math.floor(Math.random() * colors.length)]} 0%, ${colors[Math.floor(Math.random() * colors.length)]} 100%)`;
    addLogEntry('AI定制页面风格');
});

aiReportBtn.addEventListener('click', () => {
    aiResponse.textDiagonal('生成报告：此页面包含AI艺术作品生成、智能对话模拟、诗词创作、动态背景等炫酷功能，全部由AI自动实现。');
    addLogEntry('AI生成功能报告');
});

aiRandomBtn.addEventListener('click', () => {
    const actions = [
        () => generateAIArt(),
        () => generatePoetry(),
        () => generateAIResponse(),
        () => { currentBgMode = (currentBgMode + 1) % bgModes.length; createBackgroundAnimation(); }
    ];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    randomAction();
    addLogEntry('AI随机执行功能');
});

// 初始化日志
addLogEntry('AI页面初始化完成');
addLogEntry('艺术作品生成完成');
addLogEntry('诗词生成完成');
addLogEntry('动态背景启动');

// 更新访问链接
const accessUrl = document.getElementById('access-url');
if (accessUrl) {
    accessUrl.href = 'https://null1q84.github.io/mobile-web-demo/';
    accessUrl.textContent = 'null1q84.github.io/mobile-web-demo';
}

// 更新状态信息
const deployTimeElement = document.getElementById('deploy-time');
if (deployTimeElement) {
    const now = new Date();
    deployTimeElement.textContent = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

// 添加键盘快捷键
document.addEventListener('keydown', (e) => {
    if (e.key === 'a' || e.key === 'A') {
        generateAIArt();
        addLogEntry('快捷键A触发: AI艺术作品');
    }
    if (e.key === 'p' || e.key === 'P') {
        generatePoetry();
        addLogEntry('快捷键P触发: AI诗词生成');
    }
});