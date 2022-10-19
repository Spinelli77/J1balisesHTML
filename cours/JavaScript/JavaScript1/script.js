//boucle FOR
const joursDeLaSemaine = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche"
];
let listeHTML = `<ul>`;
for (let i = 0; i < joursDeLaSemaine.length; i++){
    listeHTML += `<li>` + joursDeLaSemaine[i] + `</i>`;
}
listeHTML += `</ul>`;
document.body.innerHTML += listeHTML;

//boucle WHILE
let listeHTMLWhile = `<ul>`;
let l = 0;
while (l < joursDeLaSemaine.length){
    listeHTMLWhile += `<li>` + joursDeLaSemaine[l] + `</i>`;
    l++;
}
listeHTMLWhile += `</ul>`;
document.body.innerHTML += listeHTMLWhile;

//boucle FOREACH
let listesemaineForEach = `<ul>`;
joursDeLaSemaine.forEach(function (semaineEnCours) {
    listesemaineForEach += `<li>` + semaineEnCours + `</li>`;
});
listesemaineForEach += `</ul>`;
document.body.innerHTML += listesemaineForEach;

//----------------------------------------------------------------------------

//boucle FOR
const lesMoisDelAnnee = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
];
let listeHTMLMois = `<ul>`;
for (let i = 0; i < lesMoisDelAnnee.length; i++) {
    listeHTMLMois += `<li>${lesMoisDelAnnee[i]}</i>`;
}
listeHTMLMois += `</ul>`;
document.body.innerHTML += listeHTMLMois;

//boucle WHILE
let listeHTMLWhileMois = `<ul>`;
let k = 0;
while (k < lesMoisDelAnnee.length){
    listeHTMLWhileMois += `<li>` + lesMoisDelAnnee[k] + `</i>`;
    k++;
}
listeHTMLWhileMois += `</ul>`;
document.body.innerHTML += listeHTMLWhileMois;

//boucle FOREACH
let listemoisForEach = `<ul>`;
lesMoisDelAnnee.forEach(function (moisEnCours) {
    listemoisForEach += `<li>` + moisEnCours + `</li>`;
});
listemoisForEach += `</ul>`;
document.body.innerHTML += listemoisForEach;

//------------------------------------------------------------------------
//PERMET DE CONTROLER LE SCRIPTE ET DEBLOQUER QUAND ON EN A BESOIN
const fruits = [
    "pomme",
    "pêche",
    "poire",
    "abricot",
    "banane",
    "cerise",
    "orange",
];
// COMME C LE BORDEL ON RANGE DANS DES FONCTIONS (on ne met pas la constante car sinon elle est bloquée en local(voir portée des variables))
function afficheLaSalade() {
    let listeFruits = `<ul>`;
    fruits.forEach(function(saladeDeFruits){
        listeFruits += `<li>` + saladeDeFruits + `</li>`;
    });
    listeFruits += `</ul>`;
    document.body.innerHTML += listeFruits;
}
//LA DEFINITION NE LANCE PAS LA FONCTION, IL FAUT L'APPELLER
afficheLaSalade()
//SI ON MET EN COMMENTAIRE L'APPEL DES FONCTIONS "afficheLaSalade()" ELLE NE PARAIT PLUS

//-------------------------------------------------------------------------
//PORTÉE DES VARIABLES Global et Local Scopes
//avec const et let il faut declarer la variable avant la fonctions qui vont faire usage de ces variables
let globale = "je suis accessible de partout";

let locale = "Je suis accessible uniquement à l'intérieur de la fonction dans laquelle je suis et dans les autres fonctions incluses dans cette fonction";