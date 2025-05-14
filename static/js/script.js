// Ensure compatibility with Flask by waiting for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-content');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Advance to the next slide, looping back to the start if necessary
        const offset = -currentIndex * 100; // Calculate the offset based on the current index
        slider.style.transform = `translateX(${offset}%)`;
        slider.style.transition = 'transform 1.5s ease-in-out'; // Add smooth transition
    }

    // Set an interval to automatically change slides
    setInterval(showNextSlide, 5000); // Change slide every 5 seconds
});

// Add scroll-based animation logic
window.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-animate');

    const elementInView = (el, offset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Trigger animation on page load
});