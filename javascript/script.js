

// Adicionando funcionalidade de carrossel automático com transição suave
const slider = document.querySelector('.slider-content');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Avança para o próximo slide, voltando ao início se necessário
    const offset = -currentIndex * 100; // Calcula o deslocamento com base no índice atual
    slider.style.transform = `translateX(${offset}%)`;
}

// Define o intervalo para mudar os slides automaticamente
setInterval(showNextSlide, 2000); // Troca de slide a cada 2 segundos