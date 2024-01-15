$(document).ready(function () {
    const $slider = $('.slider');
    const $slides = $('.slide');
    const totalSlides = $slides.length;
    let currentIndex = 0;

    $('.next-btn').on('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    $('.prev-btn').on('click', function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    function updateSlider() {
        const translateValue = -100 * currentIndex + '%';
        $slider.css('transform', 'translateX(' + translateValue + ')');
    }
});
