/* ФАЙЛ: script.js */
document.addEventListener('DOMContentLoaded', () => {
    const tourButton = document.getElementById('tourBtn');

    if (tourButton) {
        tourButton.addEventListener('click', () => {
            alert('Спасибо! Наш менеджер свяжется с вами для подбора тура от «Ракушечки».');
        });
    }

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Спасибо за заявку! Мы скоро с вами свяжемся.');
            contactForm.reset();
        });
    }
});