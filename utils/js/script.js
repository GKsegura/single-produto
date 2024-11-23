const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const imgProduct = document.getElementById('product-image');
const heart = document.getElementById('heart');

const imgs = [
    'https://ae-pic-a1.aliexpress-media.com/kf/S3b92f6b3de9647c6bf99365cac405a58s.jpg_640x640.jpg_.webp',
    'https://ae-pic-a1.aliexpress-media.com/kf/Sa361801815ef4198a49b68e59cb34924y/Mouse-sem-fio-Attack-Shark-X11-conex-o-tripla-modo-2-4-GHz-com-fio-Bluetooth.jpg_.webp',
    'https://ae-pic-a1.aliexpress-media.com/kf/S085112c0c812498393322e1dcd0b0ba7B/Mouse-sem-fio-Attack-Shark-X11-conex-o-tripla-modo-2-4-GHz-com-fio-Bluetooth.jpg_.webp',
].map(src => ({ src }));

const findIndex = () => imgs.findIndex(img => img.src === imgProduct.getAttribute('src'));

const changeImage = (direction) => {
    const currentIndex = findIndex();

    let newIndex;
    if (direction === 'left') {
        newIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    } else {
        newIndex = (currentIndex + 1) % imgs.length;
    }

    imgProduct.setAttribute('src', imgs[newIndex].src);
    imgProduct.setAttribute('alt', `Image ${newIndex + 1} of ${imgs.length}`);
};

if (leftArrow && rightArrow && imgProduct) {
    leftArrow.addEventListener('click', () => changeImage('left'));
    rightArrow.addEventListener('click', () => changeImage('right'));
}

const toggleHeart = () => {
    if (heart.classList.contains('fa-regular')) {
        heart.classList.remove('fa-regular');
        heart.classList.add('fa-solid');
    } else {
        heart.classList.remove('fa-solid');
        heart.classList.add('fa-regular');
    }
}

if (heart) {
    heart.addEventListener('click', toggleHeart);
}