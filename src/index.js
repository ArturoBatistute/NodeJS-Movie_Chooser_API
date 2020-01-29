const server = require('./server')
const fs = require('fs')
const filePath = './imdb-movies.json'

let moviesInfo = (path = filePath) => {
    let JsonData = fs.readFileSync(path);
    let movies = JSON.parse(JsonData)
    return movies;
}

let movies = moviesInfo(filePath);

//console.log(movies.Title);

server.start()

exports.moviesInfo = moviesInfo;
