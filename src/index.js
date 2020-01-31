const server = require('./server')
const fs = require('fs')
const filePath = './imdb-movies.json'

// Return all movies
let moviesInfo = (path = filePath) => {
    let JsonData = fs.readFileSync(path);
    let movies = JSON.parse(JsonData)
    return movies;
}

// Return a random movie
let randomMovies = () => {
    return movies[Math.floor(Math.random() * movies.length)];
}

let movies = moviesInfo(filePath);

server.start()

exports.moviesInfo = moviesInfo;
exports.randomMovies = randomMovies;
