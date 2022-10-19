//document.querySelector('h1').addEventListener('mouseenter', function () {
  //  document.querySelector('h1').style.backgroundColor = "yellow";
//});
//document.querySelector('h1').addEventListener('mouseout', function () {
    //document.querySelector('h1').style.backgroundColor = "red";
//});

//pour ne pas répéter docume... on peut creer une variable

//  const monH1 = document.querySelector("h1");
//  monH1.addEventListener('mouseenter', function () {
//  monH1.style.backgroundColor = "yellow";
//  });
//  monH1.addEventListener('mouseout', function () {
//  monH1.style.backgroundColor = "red";
//  });

function hamburger() {
    document.querySelector('header button img').getAttribute('src');
    let isMenuOpen = false;
    document.querySelector('header button img'); addEventListener('click', function (event) {
        event.preventDefault();
        if (isMenuOpen == false) {
            document.querySelector('header button img').setAttribute('src','/cours/JavaScript/img/hamburger-on.png')
            document.querySelector('header nav ul').style.display = "block";
            isMenuOpen = true;
        } else {
            document.querySelector('header button img').setAttribute('src','/cours/JavaScript/img/hamburger-off.png')
            document.querySelector('header nav ul').style.display = "none";
            isMenuOpen = false;
        }
    });
}
hamburger();

function hamburger2() {
    document.querySelector('.buttonBurger').getAttribute('src');
    let isMenuOpen2 = false;
    document.querySelector('#version2 button'); addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(".open").classList.toggle("open");
        if (isMenuOpen2 == false) {
            document.querySelector('#version2 button img').setAttribute('src', '/cours/JavaScript/img/hamburger-on.png');
            isMenuOpen2 = true;
        } else {
            document.querySelector('#version2 button img').setAttribute('src', '/cours/JavaScript/img/hamburger-off.png');
            isMenuOpen2 = false;
        }
    });
}
hamburger2();

function giveColoredBackground() {
    const monH1 = document.querySelector("h2");
    let isColouredBackground = false;
    monH1.addEventListener('click', function () {
    if (!isColouredBackground) {
        this.style.backgroundColor = "green";
        isColouredBackground = true;
    } else {
        this.style.backgroundColor = "";
        isColouredBackground = false;
        }
    });
    }
giveColoredBackground();

//on commence par creer une fonction puis l'appeller
function showHideParagraph() {
    const leParagraph = document.querySelector('.see-more');
    const defaultButtonText = leParagraph.innerText;
    const paragraph = document.querySelector('.paragraph');
    let leparagraphnestpasaffiche = false;
    leParagraph.addEventListener('click', function (event) {
        //pour empecher le scroll de remonter tout en haut
        event.preventDefault();
        //-------------------------------------//
        if (!leparagraphnestpasaffiche) {
            paragraph.style.display = "block";
            leparagraphnestpasaffiche = true;
            this.textContent = "cacher";
        
            console.log('test');
        } else {
            paragraph.style.display = "none";
            leparagraphnestpasaffiche = false;
            //this.textContent = "Voir plus";
            this.textContent = defaultButtonText;

            console.log('test2');
        } 
    });
}
showHideParagraph();

function showHideParagraph2() {
    const leParagraph2 = document.querySelector('.see-more2');
    let leparagraphnestpasaffiche2 = false;
    leParagraph2.addEventListener('click', function (event) {
        //pour empecher le scroll de remonter tout en haut
        event.preventDefault();
        if (!leparagraphnestpasaffiche2) {
            document.querySelector('.paragraph2').classList.add('open');
            leparagraphnestpasaffiche2 = true;
            console.log('test3');
        } else {
            document.querySelector('.paragraph2').classList.remove('open');
            leparagraphnestpasaffiche2 = false;
            console.log('test4');
        } 
    });
}
showHideParagraph2();

// function onClickChangeImg() {
//     const lienToClick = document.querySelector('.lienImg');
//     const originalText = lienToClick.innerText;
//     const imgToChange = document.querySelector('.imageAChanger');
//     const srcOriginal = imgToChange.getAttribute("src");
//     let isImgChanged = false;
//     lienToClick.addEventListener('click', function (event) {
//         event.preventDefault();
//         if (isImgChanged == false) {
//             imgToChange.setAttribute("src", "img/item-01.png");
//             lienToClick.innerText = "Reviens à l'image originale";
//             isImgChanged = true;
//         } else {
//             imgToChange.setAttribute('src', srcOriginal);
//             lienToClick.innerText = originalText;
//             isImgChanged = false;
//         }    
//     });
// }
// function onClickChangeImg();