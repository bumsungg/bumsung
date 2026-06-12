const slides = document.querySelectorAll(".slide");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove("active");

  currentSlide = index;

  slides[currentSlide].classList.add("active");
}

function showNextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

if (slides.length > 1) {
  setInterval(showNextSlide, 5000);
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}