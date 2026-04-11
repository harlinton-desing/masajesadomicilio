document.querySelectorAll(".faq-item button").forEach(btn=>{
btn.addEventListener("click",()=>{
let c = btn.nextElementSibling;
c.style.display =
c.style.display==="block"?"none":"block";
});
});

document.querySelectorAll(".faq-question").forEach(btn=>{
btn.addEventListener("click", ()=>{

let card = btn.parentElement;

/* cerrar otros */
document.querySelectorAll(".faq-card").forEach(item=>{
if(item !== card){
item.classList.remove("active");
}
});

/* toggle */
card.classList.toggle("active");

});
});

const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

let index = 0;

/* CREAR DOTS */
slides.forEach((_, i)=>{
let dot = document.createElement("span");
if(i===0) dot.classList.add("active");
dotsContainer.appendChild(dot);

dot.addEventListener("click", ()=>{
index = i;
updateCarousel();
});
});

const dots = document.querySelectorAll(".dots span");

/* ACTUALIZAR */
function updateCarousel(){
track.style.transform = `translateX(-${index * 340}px)`;

slides.forEach(s=>s.classList.remove("active"));
dots.forEach(d=>d.classList.remove("active"));

slides[index].classList.add("active");
dots[index].classList.add("active");
}

/* AUTO PLAY 🔥 */
setInterval(()=>{
index = (index + 1) % slides.length;
updateCarousel();
},3000);

/* FLECHAS */
document.querySelector(".right").onclick = ()=>{
index = (index + 1) % slides.length;
updateCarousel();
};

document.querySelector(".left").onclick = ()=>{
index = (index - 1 + slides.length) % slides.length;
updateCarousel();
};

// Smooth scrolling for navigation
document.querySelectorAll('.nav-menu a[href^=\"#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80; // Navbar height
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu
    menu.classList.remove('active');
    toggle.classList.remove('active');
  });
});

// Add ID to hero if missing (Inicio)
if (!document.querySelector('#inicio')) {
  document.querySelector('.hero').id = 'inicio';
}

// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", ()=>{
menu.classList.toggle("active");
toggle.classList.toggle("active");
});

// EFECTO SCROLL
window.addEventListener("scroll", ()=>{
if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}
});
