const slides = document.querySelectorAll('.slider-item');
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');
let index = 0;

function showSlide(slideIndex) {
    slides.forEach(slide => {
        slide.classList.remove('show');
    });
    slides[slideIndex].classList.add('show');
}
showSlide(index);

next.addEventListener('click', function () {
    if (index < slides.length - 1) {
        index++;
        showSlide(index);
    }
    prev.classList.toggle('disable', index === 0);
    next.classList.toggle('disable', index === slides.length - 1);
});

prev.addEventListener('click', function () {
    if (index > 0) {
        index--;
        showSlide(index);
    }
    prev.classList.toggle('disable', index === 0);
    next.classList.toggle('disable', index === slides.length - 1);
});