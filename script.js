// script.js
const featuredImg = document.getElementById('featured');
const mainView = document.querySelector('.main-view');
const thumbs = document.querySelectorAll('.thumb');

const totalItems = thumbs.length;
const radius = 250; // O raio do círculo de miniaturas em pixels

// --- 1. Distribuir as imagens em círculo automaticamente ---
thumbs.forEach((item, i) => {
    // Calcula o ângulo em radianos para cada imagem (360 graus dividido pelo total)
    const angle = (i * (360 / totalItems)) * (Math.PI / 180);
    
    // Trigonometria para encontrar as coordenadas X e Y
    const x = Math.round(radius * Math.cos(angle));
    const y = Math.round(radius * Math.sin(angle));
    
    // Aplica o posicionamento usando variáveis CSS para não quebrar a animação
    item.style.left = `calc(50% + ${x}px)`;
    item.style.top = `calc(50% + ${y}px)`;
});


// --- 2. Função para alterar a imagem de destaque ---
function viewImage(element) {
    // Efeito Visual: Zoom out rápido e fade na imagem central
    featuredImg.style.opacity = '0';
    mainView.style.transform = 'scale(0.9)';
    
    // Troca a imagem e restaura os efeitos após um pequeno delay
    setTimeout(() => {
        featuredImg.src = element.src;
        featuredImg.style.opacity = '1';
        mainView.style.transform = 'scale(1)';
    }, 250);

    // Atualiza a borda de destaque nas miniaturas
    thumbs.forEach(t => t.classList.remove('active'));
    element.classList.add('active');
}
