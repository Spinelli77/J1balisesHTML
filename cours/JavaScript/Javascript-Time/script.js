//let compteur = 0;
//function afficheDansXSecondes() {
 //   let time = setTimeout(
 //       function () {
//            console.log('Hello' + compteur);
//            if (compteur == 10) {
//                time = clearTimeout(time);
//            } else {
 //               compteur++;
//                afficheDansXSecondes();
  //          }
//        }, 2000);
//}
//afficheDansXSecondes();


//let compteur1 = 0;
//function affiche() {
//    let time1 = setTimeout(function () {
//        console.log('Hello' + compteur1);
//        let newDiv = document.createElement("div");
//        document.querySelector("body").append(newDiv);
//        if (compteur1 == 9) {
//            time1 = clearTimeout(time1);
//        } else {
//            compteur1++;
//            affiche();
//        }
 //   }, 500);
//}
//affiche();

let compteur2 = 0;
function afficheAvecSetInterval() {
    let time2 = setInterval(function () {
        
        if (compteur2 == 20) {
            time1 = clearInterval(time2);
        } else {
            let newDiv2 = document.createElement("div");
            document.querySelector("body").append(newDiv2);
            compteur2++;
        }
    }, 500);
}
afficheAvecSetInterval()