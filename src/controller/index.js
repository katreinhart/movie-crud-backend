const model = require('../model')

getAllMovies = (req, res, next) => {
  model.getAllMovies().then(movies => {
    res.status(200).json({ movies })
  })
  
}

module.exports = {
  getAllMovies
}