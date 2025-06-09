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

    // 图片点击放大功能
    setupImageZoom();
});

/**
 * 设置图片点击放大功能
 */
function setupImageZoom() {
    // 获取模态框元素
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('modalCaption');
    const closeBtn = document.getElementsByClassName('modal-close')[0];

    // 为所有可放大的图片添加点击事件
    const zoomableImages = document.querySelectorAll('.zoomable');
    zoomableImages.forEach(img => {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;

            // 阻止滚动
            document.body.style.overflow = 'hidden';
        }
    });

    // 点击关闭按钮关闭模态框
    closeBtn.onclick = closeModal;

    // 点击模态框背景关闭模态框
    modal.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    // 按ESC键关闭模态框
    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });

    /**
     * 关闭模态框
     */
    function closeModal() {
        modal.style.display = "none";

        // 恢复滚动
        document.body.style.overflow = 'auto';
    }
} 