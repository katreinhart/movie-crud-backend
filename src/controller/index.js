const model = require('../model')

const getAllMovies = (req, res, next) => {
  model.getAllMovies().then(movies => {
    res.status(200).json({ movies })
  })
}

const getOneMovie = (req, res, next) => {
  model.getOneMovie(req.params.id).then(movie => {
    res.status(200).json({ movie })
  })
  .catch(err => {
    res.status(404).json({ error: 'There was an error' })
  })
}

module.exports = {
  getAllMovies,
  getOneMovie
}