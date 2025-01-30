let currentIndex = 0; // ��ǰ��ʾ��ͼƬ����
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function moveSlide(step) {
    currentIndex = (currentIndex + step + totalImages) % totalImages; // ������һ��ͼƬ������
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100; // ÿ���ֲ�ƫ�Ƶİٷֱ�
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// �Զ��ֲ�
setInterval(() => {
    moveSlide(1);
}, 3000);  // ÿ3���л�һ��ͼƬ