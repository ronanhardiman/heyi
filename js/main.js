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
    const modalCounter = document.getElementById('modalCounter');
    const closeBtn = document.getElementsByClassName('modal-close')[0];
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // 获取所有可放大的图片
    const zoomableImages = document.querySelectorAll('.zoomable');
    const totalImages = zoomableImages.length;

    // 当前显示的图片索引
    let currentIndex = 0;

    // 为所有可放大的图片添加点击事件
    zoomableImages.forEach(img => {
        img.onclick = function () {
            modal.style.display = "block";
            currentIndex = parseInt(this.getAttribute('data-index'));
            showImage(currentIndex);

            // 阻止滚动
            document.body.style.overflow = 'hidden';
        }
    });

    // 显示指定索引的图片
    function showImage(index) {
        const img = zoomableImages[index];
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
        modalCounter.innerHTML = `图片 ${index + 1} / ${totalImages}`;
    }

    // 显示上一张图片
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    // 显示下一张图片
    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    // 点击上一张按钮
    prevBtn.onclick = function (event) {
        event.stopPropagation();
        showPrevImage();
    }

    // 点击下一张按钮
    nextBtn.onclick = function (event) {
        event.stopPropagation();
        showNextImage();
    }

    // 键盘左右键控制
    document.addEventListener('keydown', function (event) {
        if (modal.style.display === "block") {
            if (event.key === "ArrowLeft") {
                showPrevImage();
            } else if (event.key === "ArrowRight") {
                showNextImage();
            } else if (event.key === "Escape") {
                closeModal();
            }
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

    /**
     * 关闭模态框
     */
    function closeModal() {
        modal.style.display = "none";

        // 恢复滚动
        document.body.style.overflow = 'auto';
    }
} 