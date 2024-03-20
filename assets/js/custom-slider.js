const cards = document.querySelectorAll('.cards');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        card.style.zIndex = i === index ? 3 : 1;
        card.style.transform = i === index ? 'translateY(0)' : 'translateY(-10%)';
        card.style.width = i === index ? '70vw' : '65vw';
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        showCard(i);
    });
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
});

// Initial display
showCard(currentIndex);
