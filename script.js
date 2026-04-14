document.addEventListener('DOMContentLoaded', function() {
  // Navbar menu toggle
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.classList.toggle("active");
  });

  // Carousel
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
});


const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

/* SELECTORES UNIFICADOS */
const clickableImages = document.querySelectorAll(
  '.gallery-item, .team-img'
);

clickableImages.forEach(item => {
  item.addEventListener('click', () => {

    let img;

    // Si es galería
    if (item.classList.contains('gallery-item')) {
      img = item.querySelector('img');
    } 
    // Si es imagen del equipo
    else {
      img = item;
    }

    lightbox.classList.add('active');
    lightboxImg.src = img.src;
  });
});

/* CERRAR */
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove('active');
  }
});

const video = document.getElementById('videoPro');
const soundBtn = document.getElementById('soundBtn');

soundBtn.addEventListener('click', () => {
  video.muted = !video.muted;

  if (video.muted) {
    soundBtn.textContent = "🔊 Activar Sonido";
  } else {
    soundBtn.textContent = "🔇 Quitar Sonido";
  }
});

/* EFECTO PLAY/PAUSE AL HACER CLICK EN EL VIDEO */
video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});


const teamCards = document.querySelectorAll('.team-card');
const modal = document.getElementById('teamModal');
const modalImg = document.getElementById('teamModalImg');
const modalName = document.getElementById('teamModalName');
const modalDesc = document.getElementById('teamModalDesc');
const closeModal = document.querySelector('.team-close');

teamCards.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');

    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalName.textContent = card.dataset.name;
    modalDesc.textContent = card.dataset.desc;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});




