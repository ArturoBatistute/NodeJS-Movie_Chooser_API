const movies = require('./index')
const express = require('express')
const app = express()

let allMovies = () => movies.moviesInfo();
let randomMovies = () => movies.randomMovies();

app.get('/v1/movie', async (req, res, next) => {
  res.send(randomMovies())
})

app.get('/v1/movie/:director', async (req, res, next) => {
  res.status(501).send('Not Implemented')
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
