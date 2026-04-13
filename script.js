// 计数器功能
const counterBtn = document.getElementById('counter-btn');
const counterValue = document.getElementById('counter-value');
let count = 0;

counterBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
    
    // 添加动画效果
    counterValue.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterValue.style.transform = 'scale(1)';
    }, 300);
});

// 更新部署时间
const deployTime = document.getElementById('deploy-time');
const now = new Date();
deployTime.textContent = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});

// 颜色选择器模拟（随机颜色变化）
const colorPicker = document.querySelector('.color-picker');
const colorPickerTitle = colorPicker.querySelector('h3');

function changeRandomColor() {
    const randomColor = getRandomColor();
    colorPicker.style.backgroundColor = randomColor;
    colorPickerTitle.style.color = getContrastColor(randomColor);
}

function getRandomColor() {
    const colors = [
        '#4f46e5', '#3b82f6', '#10b981', '#f59e0b',
        '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getContrastColor(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // 计算亮度
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    return brightness > 128 ? '#000000' : '#ffffff';
}

// 自动更新颜色
let colorInterval;
function startColorAnimation() {
    colorInterval = setInterval(changeRandomColor, 2000);
}

function stopColorAnimation() {
    if (colorInterval) {
        clearInterval(colorInterval);
        colorInterval = null;
    }
}

// 用户点击时开始动画
colorPicker.addEventListener('click', () => {
    if (!colorInterval) {
        startColorAnimation();
        colorPickerTitle.textContent = '颜色选择器 (正在变换)';
    } else {
        stopColorAnimation();
        colorPickerTitle.textContent = '颜色选择器';
    }
});

// 初始化
changeRandomColor();

// 添加键盘快捷键
document.addEventListener('keydown', (e) => {
    if (e.key === '+' || e.key === '=') {
        count++;
        counterValue.textContent = count;
        counterValue.style.transform = 'scale(1.2)';
        setTimeout(() => {
            counterValue.style.transform = 'scale(1)';
        }, 300);
    } else if (e.key === '-' || e.key === '_') {
        if (count > 0) {
            count--;
            counterValue.textContent = count;
            counterValue.style.transform = 'scale(1.2)';
            setTimeout(() => {
                counterValue.style.transform = 'scale(1)';
            }, 300);
        }
    }
});

// 移动端优化
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.log('移动设备检测到：优化触摸体验');
    counterBtn.style.padding = '16px 32px'; // 增加触摸区域
}