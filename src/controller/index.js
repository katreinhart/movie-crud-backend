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

const createMovie = (req, res, next) => {
  model.createMovie(req.body).then(movie => {
    res.status(200).json({movie})
  })
  .catch(err => {
    res.status(400).json({ error: 'Soemthing went wrong.' })
  })
}

const validate = (body) => {
  // title, director, year, rating, poster_url
  const errors = []
  if(!title) errors.push('title is required')
  if(!director) errors.push('director is required')
  if(!year) errors.push('year is required')
  if(year < 1900 || year > 2100) errors.push('please provide a valid year')
  if(!rating) errors.push('rating is required')
  if(rating < 1 || rating > 5) errors.push('rating must be between 1 and 5')
  if(!poster_url) errors.push('poster url is required')

  if(errors.length) {
    return {
      ... body,
      errors
    }
  }

  return body
}

module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie
}