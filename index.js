const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let currentSlide = 0; // Start with Tanya's slide

// Function to Show Slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Next Button Click
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to first slide
    showSlide(currentSlide);
});

// Previous Button Click
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to last slide
    showSlide(currentSlide);
});

// Show Initial Slide
showSlide(currentSlide);
