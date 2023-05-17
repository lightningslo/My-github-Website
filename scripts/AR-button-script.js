const arButton = document.getElementById('checkbox');
const overlay = document.getElementById('overlay')
    
function toggleArTint() {
  if (overlay.style.visibility == "visible"){
  overlay.style.visibility = "hidden"
  }
  else{
    overlay.style.visibility = "visible"
  }
};
const slideContainer = document.querySelector('.slide-container');
const slides = Array.from(document.querySelectorAll('.slide'));
const slideButton = document.querySelector('.slidebutton');

let currentSlideIndex = 0;

slideButton.addEventListener('click', () => {
  const currentSlide = slides[currentSlideIndex];
  currentSlide.classList.add('slide-animation');
  currentSlide.addEventListener('animationend', () => {
    currentSlide.classList.remove('slide-animation');
    currentSlide.classList.remove('active-slide');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    const nextSlide = slides[currentSlideIndex];
    nextSlide.classList.add('active-slide');
  });
});
