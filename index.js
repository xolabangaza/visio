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

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const dotContainer = document.querySelector('.dot-container');

    const totalSlides = document.querySelectorAll('.slide').length;
    let currentSlide = 0;

    // Function to create dots
   
function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        const halfCircleTop = document.createElement('div');
        halfCircleTop.classList.add('half-circle', 'top');
        dot.appendChild(halfCircleTop);

        const halfCircleBottom = document.createElement('div');
        halfCircleBottom.classList.add('half-circle', 'bottom');
        dot.appendChild(halfCircleBottom);

        dotContainer.appendChild(dot);
    }
    updateDots();
}

    

    // Function to update dots based on the current slide
    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Event listeners for next and previous buttons
    document.querySelector('.next-btn').addEventListener('click', function () {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSlider();
    });

    document.querySelector('.prev-btn').addEventListener('click', function () {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1;
        }
        updateSlider();
    });

    // Function to update the slider and dots
    function updateSlider() {
        const translateValue = -currentSlide * 100 + '%';
        slider.style.transform = 'translateX(' + translateValue + ')';
        updateDots();
    }

    // Call the createDots function to initialize dots
    createDots();
});
