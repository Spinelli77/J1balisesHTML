import './app.css'

// Fonctionnement ok pour bouton 1
// const alert1 = document.querySelector('button');

// alert1.addEventListener('click', event => {
//     event.preventDefault()

//     alert("Thank You !");

// });


// Fonctionnement pour chacun des 2 boutons ok
const alert2 = document.querySelectorAll('.click-me_button')

alert2.forEach((button) => {
    button.addEventListener('click', () => {
        alert("Thank You !")
    })
})


// CODE DU PROF
// const clickMeButtons = document.querySelectorAll('.click-me_button')

// // console.log(clickMeButtons)

// clickMeButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     alert("Thank you !")
//   })
// })
