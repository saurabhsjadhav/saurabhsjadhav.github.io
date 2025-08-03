
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

setInterval(() => {
  nextSlide();
}, 5000);

showSlide(currentSlide);
function playMusic() {
  const audio = document.getElementById("bg-music");
  audio.play().catch(() => {
    alert("Browser blocked autoplay. Please interact to start music.");
  });
}
