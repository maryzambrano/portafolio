// ===== SCROLL SUAVE PARA NAVEGACIÓN =====


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();


const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth'
});
}
});
});


// ===== RESALTAR SECCIÓN ACTIVA EN NAV =====


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');


window.addEventListener('scroll', () => {
let current = '';


sections.forEach(section => {
const sectionTop = section.offsetTop - 100;
if (pageYOffset >= sectionTop) {
current = section.getAttribute('id');
}
});


navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href') === `#${current}`) {
link.classList.add('active');
}
});
});


// ===== AÑO AUTOMÁTICO EN FOOTER =====


const footer = document.querySelector('footer p');
if (footer) {
const year = new Date().getFullYear();
footer.innerHTML = `© ${year} Marynellis Zambrano · Portafolio profesional`;
}