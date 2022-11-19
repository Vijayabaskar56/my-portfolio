// gsp fadein
const tl = gsap.timeline({defaults: {ease: 'power2.out'}});

tl.to(".slider", {y: "-100%", duration: 1.2});
tl.to(".intro", {y: "0%", duration: 1.2}, "-=1");
tl.to(".my-services", {y: "0%", duration: 1.2}, "-=1");
tl.to(".about-me", {y: "0%", duration: 1.2}, "-=1");
tl.to(".my-work", {y: "0%", duration: 1.2}, "-=1");
tl.to("footer", {y: "0%", duration: 1.2}, "-=1");
tl.fromTo('.navi', {opacity: 0}, {opacity: 1, duration: 1});

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



