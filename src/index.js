const server = require('./server')
const fs = require('fs')
const filePath = 'imdb-movies.json'

// Return all movies
let allMovies = (path = filePath) => {
    let JsonData = fs.readFileSync(path);
    let movies = JSON.parse(JsonData)

    return movies;
}

let movies = allMovies();

// Return a random movie from a random director
let randomMovie = () => {

    return movies[Math.floor(Math.random() * movies.length)];
}

/* Another way to search a Director
let directorRandomMovie = movies.filter((item) => {
    
    return item.Director == 'Joss Whedon';
})
*/

let directorRandomMovie = (director) => {
    let results = {};

    for(let key in movies)
        if(movies.hasOwnProperty(key) && movies[key].Director === director)
            
        results[key] = movies[key];
      
    return results;
}

server.start()

exports.randomMovie = randomMovie;
exports.directorRandomMovie = directorRandomMovie;
