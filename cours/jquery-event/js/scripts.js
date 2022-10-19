// const monH1 = document.querySelector("h1");
// monH1.addEventListener("mouseenter", function () {
//   monH1.style.backgroundColor = "yellow";
// });
// monH1.addEventListener("mouseout", function () {
//   monH1.style.backgroundColor = "";
// });

// // je stocke dans une variable mon sélecteur
// const monH1 = document.querySelector("h1");
// // je définis une variable qui va m'indiquer si il y a un e couleur de fond ou pas. Je lui donne la valeur "false" pare que au début il n'y a pas de couleur de fond
// let isColouredBackground = false;
// // Je lance mon gestionnaire d'événement qui va écouter le click sur le H1
// monH1.addEventListener("click", function () {
//   // si il n'y a pas  de couleur de fond
//   if (isColouredBackground == false) {
//     // alors je mets une couelur de fond sur le H1
//     monH1.style.backgroundColor = "yellow";
//     // je fais basculer la valeur de ma variable d'indication de couleur de fond à true
//     isColouredBackground = true;
//     // je teste la condition où il y a une couleur de fond
//   } else if (isColouredBackground == true) {
//     // j'enlève la couleur de fond
//     monH1.style.backgroundColor = "";
//     // je fais basculer la valeur de ma variable d'indication de couleur de fond à false puisque je viens d'enlever la couelur de fond
//     isColouredBackground = false;
//   }
// });
function giveColouredBackground() {
  let isColouredBackground = false;
  $("h1").on("click", function () {
    if (!isColouredBackground) {
      $(this).css('background-color', 'yellow');
      isColouredBackground = true;
    } else {
      $(this).css("background-color", "");
      isColouredBackground = false;
    }
  });
}
giveColouredBackground();

function showHideParagraph() {
  let isParaDisplayed = false;
  //const linkToClick = document.querySelector(".see-more");
  // const linkToClick = $(".see-more");
  //   const defaultButtonText = document.querySelector(".see-more").textContent;
  const defaultButtonText = $(".see-more").text();
  // const $(".see-more").textContent = $(".see-more").innerText;
  // const paragraph = document.querySelector(".show-hide-para");
  // const paragraph = $(".show-hide-para");
  $(".see-more").on("click", function (event) {
    event.preventDefault();
    //si on met ici : $(".show-hide-para").fadeToggle(); ca remplace les lignes fadeIn et fadeOut
    if (isParaDisplayed == false) {
      //paragraph.style.display = "block";
      // $(".show-hide-para").show();
      $(".show-hide-para").fadeIn();
      $(this).text("cacher");
      isParaDisplayed = true;
    } else {
      //paragraph.style.display = "none";
      // $(".show-hide-para").hide();
      $(".show-hide-para").fadeOut();
      $(this).text(defaultButtonText);
      isParaDisplayed = false;
    }
  });
}
showHideParagraph();

function showHideParagraph2() {
  $(".see-more2").on("click", function (event) {
    event.preventDefault();
    // $(".show-hide-para2").toggle("open");
    $(".show-hide-para2").toggleClass("open");
  });
}
showHideParagraph2();

function changeImg() {
  const eltToClick = $(".image-link");
  const originalTexte = eltToClick.text();
  const imgAChanger = $(".image-to-change");
  const srcOriginal = imgAChanger.attr("src");
  let isImgChanged = false;
  eltToClick.on("click", function (event) {
    event.preventDefault();
    if (isImgChanged == false) {
      imgAChanger.attr("src", "img/item-01.png");
      eltToClick.text("Reviens à l'image originale");
      isImgChanged = true;
    } else {
      imgAChanger.on("src", srcOriginal);
      eltToClick.text(originalTexte);
      isImgChanged = false;
    }
  });
}
changeImg();

function hamburger() {
  const defaultBurgerSrc = $("#version1 button img").attr("src");
  const menu = $("#version1 ul").eq(0);
  let isMenuOpen = false;
  $("#version1 button").on("click", function (event) {
      event.preventDefault();
      menu.slideToggle();
      if (isMenuOpen == false) {
        $("#version1 button img")
          .attr("src", "img/hamburger-on.png");
          isMenuOpen = true;
      } else {
        $("#version1 button img")
          .attr("src", defaultBurgerSrc);
          isMenuOpen = false;
      }
    });
}
hamburger();

function hamburgerVersion2() {
  const defaultBurgerSrc = $("#version2 button img")
    .attr("src");
  const menu = $("#version2 ul");
  let isMenuOpen = false;
  $("#version2 button")
    .on("click", function (event) {
      event.preventDefault();
      $("#version2 ul").toggleClass("open");
      if (isMenuOpen == false) {
        $("#version2 button img")
          .setAttribute("src", "img/hamburger-on.png");
        isMenuOpen = true;
      } else {
        $("#version2 button img")
          .setAttribute("src", defaultBurgerSrc);
        isMenuOpen = false;
      }
    });
}
hamburgerVersion2();

// DRY : Don't Repeat Yourself
