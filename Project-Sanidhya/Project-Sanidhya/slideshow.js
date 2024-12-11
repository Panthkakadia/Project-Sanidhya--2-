let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

next.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

showSlide(currentSlide);

document.addEventListener("DOMContentLoaded", () => {
    // Event listeners for Women and Men buttons
    const womenButton = document.getElementById("women-button");
    const menButton = document.getElementById("men-button");

    if (womenButton) {
        womenButton.addEventListener("click", () => {
            window.location.href = "./women.html";
        });
    }

    if (menButton) {
        menButton.addEventListener("click", () => {
            window.location.href = "./men.html";
        });
    }
});
