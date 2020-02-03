const server = require('./server')
const fs = require('fs')
const filePath = 'imdb-movies.json'

let allMovies = (path = filePath) => {
    let JsonData = fs.readFileSync(path);
    let movies = JSON.parse(JsonData)

    return movies;
}

let movies = allMovies();

let randomMovie = () => {

    let data =  movies[Math.floor(Math.random() * movies.length)];

    let results = {
        "Director": data.Director,
        "Title": data.Title
    }

    return results;
}

let directorRandomMovie = (director) => {
    let data = {};

    for(let key in movies)
        if(movies.hasOwnProperty(key) && movies[key].Director === director)
            
        data[key] = movies[key];

        let resultsToArray = Object.values(data);
        let onlyOneMovie = (array) => array[Math.floor(Math.random() * array.length)];

        data = onlyOneMovie(resultsToArray)
        
        let results = {
            "Director": data.Director,
            "Title": data.Title
        }
        
    return results;
}

server.start();

exports.randomMovie = randomMovie;
exports.directorRandomMovie = directorRandomMovie;
