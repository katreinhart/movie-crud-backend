const model = require('../model')

getAllMovies = (req, res, next) => {
  const movies = model.getAllMovies()
  res.status(200).json({ movies })
}

module.exports = {
  getAllMovies
}