const express = require('express')
const app = express()
const fs = require('fs')
const filePath = ('imdb-movies.json')

let allMovies = (path = filePath) => {
  let JsonData = fs.readFileSync(path);
  let movies = JSON.parse(JsonData)

  return movies;
}

let movies = allMovies();

let randomMovie = () => {

  let data =  movies[Math.floor(Math.random() * movies.length)];

  let results = {
      "director": data.Director,
      "movie": data.Title
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
          "director": data.Director,
          "movie": data.Title
      }
      
  return results;
}

/* Server */

app.get('/v1/movie', async (req, res, next) => {

  res.status(200).send(randomMovie());
})

app.get('/v1/movie/:director', async (req, res, next) => {
  const { director } = req.params;
  
  res.status(200).json(directorRandomMovie(director));
})

const start = async (port = 8080) => {
  app.listen(port, function () {
    console.info('%s listening at port %s', app.name, port)
  })
}

const stop = () => {
  app.close(() => {
    console.info('App Stopped')
  })
}

module.exports = {
  app,
  start,
  stop
}
