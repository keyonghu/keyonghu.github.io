let currentIndex = 0; // 当前显示的图片索引
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function moveSlide(step) {
    currentIndex = (currentIndex + step + totalImages) % totalImages; // 计算下一个图片的索引
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100; // 每次轮播偏移的百分比
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// 自动轮播
setInterval(() => {
    moveSlide(1);
}, 3000);  // 每3秒切换一张图片