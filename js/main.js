/**
 * 主JavaScript文件
 * Heyi静态网站
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    console.log('Heyi静态网站已加载');

    // 添加页面过渡效果
    const body = document.querySelector('body');
    body.style.opacity = 0;

    setTimeout(() => {
        body.style.transition = 'opacity 0.5s ease-in';
        body.style.opacity = 1;
    }, 100);

    // 为图片添加加载效果
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = 0;
        img.style.transition = 'opacity 0.5s ease-in';

        img.addEventListener('load', () => {
            img.style.opacity = 1;
        });

        // 如果图片已经缓存，强制触发load事件
        if (img.complete) {
            img.style.opacity = 1;
        }
    });
}); 