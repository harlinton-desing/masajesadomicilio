const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;
let interval;

/* CALCULAR ANCHO */
function getSlideWidth() {
  const slide = slides[0];
  const gap = parseInt(window.getComputedStyle(track).gap) || 25;
  return slide.offsetWidth + gap;
}

/* MOVER */
function moveCarousel() {
  const slideWidth = getSlideWidth();
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

/* SIGUIENTE */
function nextSlide() {
  index = (index + 1) % slides.length;
  moveCarousel();
}

/* ANTERIOR */
function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  moveCarousel();
}

/* EVENTOS */
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

/* AUTO PLAY */
function startAuto() {
  interval = setInterval(nextSlide, 3000);
}

function stopAuto() {
  clearInterval(interval);
}

startAuto();

/* PAUSAR AL PASAR EL MOUSE */
track.addEventListener("mouseenter", stopAuto);
track.addEventListener("mouseleave", startAuto);

/* RESPONSIVE FIX */
window.addEventListener("resize", moveCarousel);


const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
});
