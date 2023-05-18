const arButton = document.getElementById('checkbox');
const overlay = document.getElementById('overlay');
const hiddenimg = document.getElementById('hiddenimg');
const hiddentxt = document.getElementById('hiddentxt');



function toggleArTint() {
  if (overlay.style.visibility == "visible"){
  overlay.style.visibility = "hidden"
  hiddenimg.style.visibility = "hidden"
  hiddentxt.style.visibility = "hidden"
  }
  else{
    overlay.style.visibility = "visible"
    hiddenimg.style.visibility = "visible"
    hiddentxt.style.visibility = "visible"
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
