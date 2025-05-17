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

document.addEventListener('DOMContentLoaded', function() {
    const textos = [
        "Bem-vindo ao Espaço Medit",
        "Espaço Medit 2",
        "Espaço Medit 3",
        "Espaço Medit 4"
    ];
    let index = 0;
    const slideText = document.querySelector('.slide-text');

    

    function showTextWithAnimation() {
        // Remove classes to reset
        slideText.classList.remove('invisible', 'slide-down');
        // Forçar reflow para reiniciar animação
        void slideText.offsetWidth;
        // Adiciona animação de entrada
        slideText.classList.add('slide-down');
        slideText.textContent = textos[index];
        // Remove animação de entrada após 1s
        setTimeout(() => {
            slideText.classList.remove('slide-down');
        }, 1000);
    }

    function trocarTexto() {
        // Torna invisível no último segundo
        slideText.classList.add('invisible');
        setTimeout(() => {
            index = (index + 1) % textos.length;
            showTextWithAnimation();
        }, 1000); // 1s antes de trocar
    }

    // Inicializa
    showTextWithAnimation();
    setInterval(trocarTexto, 5000); // Troca a cada 5 segundos
});