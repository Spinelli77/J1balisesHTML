import './app.css'

// TODO : Ecrire la définition du mot entré dans le formulaire
const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"

// const searchForm = document.querySelector('#search-form')
// const wordInput = document.querySelector('#word-input')
// const word = document.querySelector('#word')
// const result = document.querySelector('#definition')

// searchForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const query = wordInput.value
//     word.innerHTML = query

//     fetch(baseUrl + query)
//         .then(response => response.json())
//         .then((data) => {
//             const definition = data[0].meanings[0].definitions[0].definition
//             result.innerHTML = definition
//         })
// })

//REFACTO

const searchForm = document.querySelector('#search-form')
const wordInput = document.querySelector('#word-input')
const word = document.querySelector('#word')
const result = document.querySelector('#definition')

const displayDefinition = (data) => {
  const definition = data[0].meanings[0].definitions[0].definition
  result.innerHTML = definition
}

const fetchDictionnaryApi = (query) => {
  fetch(baseUrl + query)
    .then(response => response.json())
    .then(displayDefinition)
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const query = wordInput.value
  word.innerHTML = query
  fetchDictionnaryApi(query)
})

