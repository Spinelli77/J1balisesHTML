const swiper = new Swiper(".swiper", {
  //Optional parameters
  //direction : "vertical"
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl:".swiper-button-prev",
  },

  //el: ".swiper-scrollbar",
});

const swiper2 = new Swiper(".swiper2", {
  //Optional parameters
  //direction : "vertical"
  loop: true,
  autoplay: {
    Delay: 1000,
  },

  navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
  //el: ".swiper-scrollbar",
});

const swiper3 = new Swiper(".swiper3", {
  //Optional parameters
  //direction : "vertical"
  loop: true,
  autoplay: {
    Delay: 1000,
  },
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
  //el: ".swiper-scrollbar",
});

const swiper4 = new Swiper(".swiper4", {
  //Optional parameters
  //direction : "vertical"
  loop: true,
  autoplay: {
    Delay: 1000,
  },
  slidesPerView: 3,
  effect: "coverflow",

  // navigation: {
  //   nextEl:".swiper-button-next",
  //   prevEl:".swiper-button-prev",
  // },
  //el: ".swiper-scrollbar",
});

const swiper5 = new Swiper(".swiper5", {
  //Optional parameters
  //direction : "vertical"
  loop: true,
  // autoplay: {
  //   Delay: 1000,
  // },
  slidesPerView: 4,
  effect: "creativ",
  
  navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
  //el: ".swiper-scrollbar",
});


































// const imgCarousel = [
//     "/cours/JavaScript/img/item-00.png",
//     "/cours/JavaScript/img/item-01.png",
//     "/cours/JavaScript/img/item-02.png",
//     "/cours/JavaScript/img/item-03.png",
//     "/cours/JavaScript/img/item-04.png",
//     "/cours/JavaScript/img/item-05.png",
//     "/cours/JavaScript/img/item-06.png",
//     "/cours/JavaScript/img/item-07.png",
//     "/cours/JavaScript/img/item-08.png",
//     "/cours/JavaScript/img/item-09.png",
// ];
// function carousel() {
//     let indice = 0;
//     let carouselGo = setInterval(function () {
//         if (indice > imgCarousel.length - 1) {
//             indice = 0;
//         }
//         document.querySelector("#image-to-change").setAttribute('src', imgCarousel[indice]);
//         indice++;
//     }, 500);
// }
// carousel();

// const imgCarousel = [
//     "img/item-00.png",
//     "img/item-01.png",
//     "img/item-02.png",
//     "img/item-03.png",
//     "img/item-04.png",
//     "img/item-05.png",
//     "img/item-06.png",
//     "img/item-07.png",
//     "img/item-08.png",
//     "img/item-09.png",
//   ];
//   function carousel() {
//     let indice = 0;
//     let carouselGo = setInterval(function () {
//       if (indice > imgCarousel.length - 1) {
//         indice = 0;
//       }
//       document
//         .querySelector("#image-to-change")
//         .setAttribute("src", imgCarousel[indice]);
//       indice++;
//     }, 500);
//   }
//   carousel();
  
//   function carouselAlenvers() {
//     let indice = imgCarousel.length - 1;
//     let carouselGo = setInterval(function () {
//       if (indice < 0) {
//         indice = imgCarousel.length - 1;
//       }
//       document
//         .querySelector("#image-to-change")
//         .setAttribute("src", imgCarousel[indice]);
//       indice--;
//     }, 500);
// }
// carouselAlenvers();