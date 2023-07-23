// swiper testi
var swiper = new Swiper(".mySwipers", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints:{
    0:{
      slidesPerView:1,
    },
    450:{
      slidesPerView:2,
    },
    950:{
      slidesPerView:3,
    },
  }
});
