function filterSelection(event, category) {
    let items = document.getElementsByClassName('portfolio-item');
    let buttons = document.querySelectorAll('nav button');
    
    buttons.forEach(btn => btn.classList.remove('text-white'));
    event.currentTarget.classList.add('text-white');

    if (category === 'all') {
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = 'block';
        }
        return;
    }

    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains(category)) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Sua mensagem foi enviada com sucesso!');
        });
    }
});
