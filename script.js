// 调试日志
console.log('AI功能脚本已加载');

// 确保元素存在
function checkElements() {
    const elements = {
        canvas: document.getElementById('art-canvas'),
        generateArtBtn: document.getElementById('generate-art'),
        userInput: document.getElementById('user-input'),
        sendMessageBtn: document.getElementById('send-message'),
        aiResponse: document.getElementById('ai-response'),
        generatePoetryBtn: document.getElementById('generate-poetry'),
        poetryContent: document.getElementById('poetry-content'),
        bgCanvas: document.getElementById('bg-canvas'),
        bgModeBtn: document.getElementById('bg-mode'),
        bgModeName: document.getElementById('bg-mode-name'),
        aiRefreshBtn: document.getElementById('ai-refresh'),
        aiCustomizeBtn: document.getElementById('ai-customize'),
        aiReportBtn: document.getElementById('ai-report'),
        aiRandomBtn: document.getElementById('ai-random'),
        logList: document.getElementById('log-list')
    };
    
    console.log('检查元素:', elements);
    return elements;
}

const elements = checkElements();

// AI 艺术作品生成器
if (elements.canvas && elements.generateArtBtn) {
    console.log('艺术作品生成器已初始化');
    const ctx = elements.canvas.getContext('2d');
    elements.canvas.width = elements.canvas.offsetWidth;
    elements.canvas.height = elements.canvas.offsetHeight;
    
    function generateAIArt() {
        ctx.clearRect(0, 0, elements.canvas.width, elements.canvas.height);
        
        // 随机生成艺术图案
        const colors = ['#667eea', '#764ba2', '#f59e0b', '#ef4444', '#10b981', '#06b6d4'];
        
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * elements.canvas.width;
            const y = Math.random() * elements.canvas.height;
            const radius = Math.random() * 30 + 10;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            
            // 添加随机线条
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(Math.random() * elements.canvas.width, Math.random() * elements.canvas.height);
            ctx.strokeStyle = color;
            ctx.lineWidth = Math.random() * 3;
            ctx.stroke();
        }
        
        addLogEntry('艺术作品生成完成');
    }
    
    elements.generateArtBtn.addEventListener('click', generateAIArt);
    generateAIArt();
}

// AI 对话模拟
if (elements.userInput && elements.sendMessageBtn && elements.aiResponse) {
    console.log('AI对话模拟已初始化');
    
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
        const userText = elements.userInput.value.trim();
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
        
        elements.aiResponse.textContent = response;
        addLogEntry(`AI回复: "${response}"`);
    }
    
    elements.sendMessageBtn.addEventListener('click', generateAIResponse);
    elements.userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateAIResponse();
    });
}

// AI 诗词生成
if (elements.generatePoetryBtn && elements.poetryContent) {
    console.log('AI诗词生成已初始化');
    
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
        elements.poetryContent.textContent = poetry.join('\n\n');
        addLogEntry('AI生成诗词');
    }
    
    elements.generatePoetryBtn.addEventListener('click', generatePoetry);
    generatePoetry();
}

// 动态背景效果
if (elements.bgCanvas && elements.bgModeBtn && elements.bgModeName) {
    console.log('动态背景效果已初始化');
    
    const bgModes = ['彩虹波纹', '星空闪烁', '粒子动画', '渐变流动'];
    let currentBgMode = 0;
    
    function createBackgroundAnimation() {
        elements.bgCanvas.innerHTML = '';
        elements.bgCanvas.style.position = 'relative';
        
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
                elements.bgCanvas.appendChild(circle);
            }
        }
        
        elements.bgModeName.textContent = bgModes[currentBgMode];
    }
    
    elements.bgModeBtn.addEventListener('click', () => {
        currentBgMode = (currentBgMode + 1) % bgModes.length;
        createBackgroundAnimation();
        addLogEntry(`切换背景模式: ${bgModes[currentBgMode]}`);
    });
    
    createBackgroundAnimation();
}

// AI控制面板和日志
function addLogEntry(text) {
    if (elements.logList) {
        const li = document.createElement('li');
        li.textContent = `${new Date().toLocaleTimeString('zh-CN')}: ${text}`;
        elements.logList.appendChild(li);
    }
    console.log('AI日志:', text);
}

if (elements.aiRefreshBtn) {
    elements.aiRefreshBtn.addEventListener('click', () => {
        if (elements.canvas && elements.generateArtBtn) {
            const ctx = elements.canvas.getContext('2d');
            ctx.clearRect(0, 0, elements.canvas.width, elements.canvas.height);
            const colors = ['#667eea', '#764ba2', '#f59e0b', '#ef4444', '#10b981', '#06b6d4'];
            for (let i = 0; i < 50; i++) {
                const x = Math.random() * elements.canvas.width;
                const y = Math.random() * elements.canvas.height;
                const radius = Math.random() * 30 + 10;
                const color = colors[Math.floor(Math.random() * colors.length)];
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            }
        }
        addLogEntry('AI刷新所有功能');
    });
}

if (elements.aiCustomizeBtn) {
    elements.aiCustomizeBtn.addEventListener('click', () => {
        const colors = ['#667eea', '#764ba2', '#f59e0b', '#ef4444', '#10b981'];
        document.body.style.background = `linear-gradient(135deg, ${colors[Math.floor(Math.random() * colors.length)]} 0%, ${colors[Math.floor(Math.random() * colors.length)]} 100%)`;
        addLogEntry('AI定制页面风格');
    });
}

if (elements.aiRandomBtn) {
    elements.aiRandomBtn.addEventListener('click', () => {
        if (elements.canvas && elements.generateArtBtn) {
            const ctx = elements.canvas.getContext('2d');
            ctx.clearRect(0, 0, elements.canvas.width, elements.canvas.height);
            const colors = ['#667eea', '#764ba2', '#f59e0b', '#ef4444', '#10b981', '#06b6d4'];
            for (let i = 0; i < 20; i++) {
                const x = Math.random() * elements.canvas.width;
                const y = Math.random() * elements.canvas.height;
                const radius = Math.random() * 30 + 10;
                const color = colors[Math.floor(Math.random() * colors.length)];
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            }
        }
        addLogEntry('AI随机执行功能');
    });
}

// 初始化日志
addLogEntry('AI页面初始化完成');
addLogEntry('艺术作品生成完成');
addLogEntry('诗词生成完成');
addLogEntry('动态背景启动');

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    if (e.key === 'a' || e.key === 'A') {
        if (elements.canvas && elements.generateArtBtn) {
            const ctx = elements.canvas.getContext('2d');
            ctx.clearRect(0, 0, elements.canvas.width, elements.canvas.height);
            const colors = ['#667eea', '#764ba2', '#f59e0b', '#ef4444', '#10b981', '#06b6d4'];
            for (let i = 0; i < 50; i++) {
                const x = Math.random() * elements.canvas.width;
                const y = Math.random() * elements.canvas.height;
                const radius = Math.random() * 30 + 10;
                const color = colors[Math.floor(Math.random() * colors.length)];
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            }
            addLogEntry('快捷键A触发: AI艺术作品');
        }
    }
    if (e.key === 'p' || e.key === 'P') {
        if (elements.poetryContent) {
            const poetryLines = [
                "智能之光照亮夜空，代码编织梦想之旅",
                "AI之笔描绘未来，科技之魂飞跃时空",
                "星辰指引创新路，智能开辟新篇章",
                "算法似诗般优雅，代码如画般绚烂",
                "电子之海深且广，人工智能显神威",
                "创造力源源不绝，创新力永不止步",
                "数据化作诗歌韵律，代码变成艺术表达"
            ];
            const poetry = [];
            for (let i = 0; i < 3; i++) {
                poetry.push(poetryLines[Math.floor(Math.random() * poetryLines.length)]);
            }
            elements.poetryContent.textContent = poetry.join('\n\n');
            addLogEntry('快捷键P触发: AI诗词生成');
        }
    }
});

console.log('所有功能初始化完成');