const swiper4 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
  autoplay: {
    Delay: 1000,
},
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// const swiper4 = new Swiper(".swiper4", {
//     //Optional parameters
//     //direction : "vertical"
//   loop: true,
//   clickable: true,
//     autoplay: {
//       Delay: 1000,
//     },
//     slidesPerView: 7,
//     // effect: "coverflow",
  
//     navigation: {
//       nextEl:".swiper-button-next",
//       prevEl:".swiper-button-prev",
//     },
    
// });
  
//si le carousel passe en mode md : supprimer l'effet et le nombre de slides per view devient 1

// function hamburger() {
//     document.querySelector('header button img').getAttribute('src');
//     let isMenuOpen = false;
//     document.querySelector('header button img'); addEventListener('click', function (event) {
//         event.preventDefault();
//         if (isMenuOpen == false) {
//             document.querySelector('header button img').setAttribute('src','/cours/JavaScript/img/hamburger-on.png')
//             document.querySelector('header nav ul').style.display = "block";
//             isMenuOpen = true;
//         } else {
//             document.querySelector('header button img').setAttribute('src','/cours/JavaScript/img/hamburger-off.png')
//             document.querySelector('header nav ul').style.display = "none";
//             isMenuOpen = false;
//         }
//     });
// }
// hamburger();