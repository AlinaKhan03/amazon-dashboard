let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % 5; // Adjust the number based on the number of slides
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 5) % 5; // Adjust the number based on the number of slides
    updateSlider();
}

function updateSlider() {
    const track = document.querySelector('.slider-track');
    const newPosition = -currentIndex * 100 + '%';
    track.style.transform = 'translateX(' + newPosition + ')';
}