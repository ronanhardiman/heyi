/**
 * 主JavaScript文件
 * 为Vercel静态网站提供交互功能
 */

document.addEventListener('DOMContentLoaded', () => {
    // 获取当前年份并更新页脚版权信息
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('footer p');
    if (copyrightElement) {
        copyrightElement.textContent = copyrightElement.textContent.replace('2023', currentYear);
    }

    // 为所有部分添加淡入效果
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });

    // 添加页面交互事件示例
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) {
        headerTitle.addEventListener('click', () => {
            headerTitle.style.color = getRandomColor();
        });
    }
});

/**
 * 生成随机颜色
 * @returns {string} 十六进制颜色代码
 */
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
} 