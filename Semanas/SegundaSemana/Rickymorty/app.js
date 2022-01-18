const API_URL = 'https://rickandmortyapi.com/api/character'
const SEARCH_URL = 'https://rickandmortyapi.com/api/character/?name='

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')



const getMovies = (url) => {

    const peticion = fetch(url)
    peticion.then(res=> res.json()) 
            .then(data => showCharacter(data.results))
            .catch(error => console.log(error))
}


getMovies(API_URL)



function showCharacter(characters){

    console.log(characters)
    



    characters.forEach((character) => {

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${character.image}" alt="" class="movie-info">
            <div class="movie-info">
                <h3>${character.name}</h3>
                <span class="${getClassByRate(character.status)}">${character.status}</span>
            </div>
        `
        main.appendChild(movieEl)
    });
}


function getClassByRate(vote) {
    if (vote == "Alive") {
        return 'green'
    } else if (vote == "unknown") {
        return 'orange'
    } else if (vote == "Dead") {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        main.innerHTML = ""
        getMovies(SEARCH_URL + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
      
    }
})
