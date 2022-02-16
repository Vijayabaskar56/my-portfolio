const navToggle = document.querySelector('.navi-toggle');
const navLinks = document.querySelectorAll('.navi__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('navi-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('navi-open');
    })
})
