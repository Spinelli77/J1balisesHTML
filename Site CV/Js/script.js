(function () {
	var tabs_menu = document.getElementsByClassName("tabs-menu");
	for (var k = 0; k < tabs_menu.length; k++) {
		tabs_menu[k].onclick = js_tabs;
	}
	function js_tabs() {
		var tab_id = this.getAttribute("data-target");
		var tabs_panel = document.getElementsByClassName("tabs-panel");

		for (var i = 0; i < tabs_panel.length; i++) {
			tabs_panel[i].style.display = "none";
			tabs_panel[i].className = tabs_panel[i].className.replace(" animated-tabs bounceIn", "");
		}
		for (var j = 0; j < tabs_menu.length; j++) {
			tabs_menu[j].className = tabs_menu[j].className.replace(" tabs-menu-active", "");
		}
		this.className += " tabs-menu-active";
		var current_tab = document.getElementById(tab_id);
		current_tab.style.display = "block";
		current_tab.className += " animated-tabs bounceIn";
		return false;
	}
})();

/* --------------------------------------- BLOGFOLIO ------------------------------*/
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
/*------------------------------------------------------------------------------*/ 

  
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