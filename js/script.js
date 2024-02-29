$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})


const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideWidth = slides.clientWidth / 3; // Assuming 3 cards visible at a time
const totalSlides = 3; // Assuming 3 cards total
let slideIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
  slideIndex = Math.max(slideIndex - 2, 0);
  showSlide(slideIndex);
});

nextButton.addEventListener('click', () => {
  if (slideIndex < totalSlides - 2) { // Check if there is a next card
    slideIndex++;
    showSlide(slideIndex);
  }
});
