import './app.css'
import axios from 'axios'

const baseUrl = 'https://wf3-restaurant-api.herokuapp.com/api/v1'
const restaurantsContainer = document.querySelector('#restaurants-container')

const createRestaurantForm = document.querySelector('#create-restaurant-form')
const restaurantNameInput = document.querySelector('#create-restaurant-name')
const restaurantAddressInput = document.querySelector('#create-restaurant-address')

const insertRestaurant = (restaurant, position) => {
  const restaurantHTML = `  <div class="p-5 border-b border-gray-500">
      <h2 class="text-sm font-bold text-gray-800">${restaurant.name}</h2>
      <h3 class="mt-1 italic text-gray-500 text-xs">${restaurant.address}</h3>
    </div>
  `
  restaurantsContainer.insertAdjacentHTML(position, restaurantHTML)
}

fetch(`${baseUrl}/restaurants.json`) // baseUrl + '/restaurants.json'
  .then(response => response.json())
  .then(data => {
    data.forEach((restaurant) => {
      insertRestaurant(restaurant, 'beforeend')
    })
  })


// Avec axios :
// axios.get(`${baseUrl}/restaurants.json`)
//   .then(response => {
//     response.data.forEach((restaurant) => {
//       const restaurantHTML = `
//         <div class="p-5 border-b border-gray-500">
//           <h2 class="text-sm font-bold text-gray-800">${restaurant.name}</h2>
//           <h3 class="mt-1 italic text-gray-500 text-xs">${restaurant.address}</h3>
//         </div>
//       `
//       restaurantsContainer.insertAdjacentHTML('beforeend', restaurantHTML)
//     })
//   })


createRestaurantForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = restaurantNameInput.value
  const address = restaurantAddressInput.value

  fetch(`${baseUrl}/restaurants.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      restaurant: {
        name,
        address
      }
    })
  })
    .then(response => response.json())
    .then(data => {
      insertRestaurant(data, 'afterbegin')
    })
})

