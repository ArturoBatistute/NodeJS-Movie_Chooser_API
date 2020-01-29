const server = require('./server')
const fs = require('fs')
const filePath = './imdb-movies.json'

let moviesInfo = (path) => {
    let JsonData = fs.readFileSync(path);
    let movies = JSON.parse(JsonData)
    return movies[0];
}

let movies = moviesInfo(filePath);


console.log(movies.Title);


//server.start()

module.exports = {
    moviesInfo
}
