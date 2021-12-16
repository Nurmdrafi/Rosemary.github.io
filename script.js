//==========//
// Carousel //
//==========//
const swiper = new Swiper(".swiper", {
  // Autoplay
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
