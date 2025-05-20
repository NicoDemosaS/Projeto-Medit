window.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-content');
    const slides = document.querySelectorAll('.slide');
    const slideText = document.querySelector('.slide-text');

    const textos = [
        "Bem-vindo ao Espaço Medit",
        "Estrutura e Conforto",
        "Ambiente imerso na Natureza",
        "Ambiente Aconchegante",
    ];

    let currentIndex = 0;

    function updateSlideAndText() {
        // Slide
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
        slider.style.transition = 'transform 1.5s ease-in-out';

        // Texto
        slideText.classList.add('invisible');
        setTimeout(() => {
            slideText.classList.remove('invisible', 'slide-down');
            void slideText.offsetWidth;
            slideText.textContent = textos[currentIndex];
            slideText.classList.add('slide-down');
            setTimeout(() => {
                slideText.classList.remove('slide-down');
            }, 1000);
        }, 1500); // Meia transição para suavidade
    }

    // Inicial
    updateSlideAndText();

    // Intervalo sincronizado
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlideAndText();
    }, 5000);
});
