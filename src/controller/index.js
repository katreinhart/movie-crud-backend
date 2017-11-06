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
    res.status(404).json({ error: `Movie with id ${req.params.id} not found.` })
  })
}

const createMovie = (req, res, next) => {
  const validBody = validate(req.body)
  if(validBody.errors) {
    return next({ message: 'there were errors', errors: validBody.errors })
  }
  model.createMovie(validBody).then(movie => {
    res.status(200).json({movie}) 
  })
  .catch(err => {
    res.status(400).json({ error: 'Something went wrong.' })
  })
}

const updateMovie = (req, res, next) => {
  const validBody = validate(req.body)
  if(validBody.errors){
    return next({ message: 'there were errors', errors: validBody.errors })
  }
  model.updateMovie(req.params.id, validBody).then(movie => {
    res.status(200).json({ movie })
  })
  .catch(err => {
    res.status(400).json({ error: 'Something went wrong.' })
  })
}

const deleteMovie = (req, res, next) => {
  model.deleteMovie(req.params.id).then(movie => {
    res.status(200).json({ movie })
  })
  .catch(err => {
    res.status(400).json({ error: 'Something went wrong' })
  })
}

const validate = (body) => {
  // title, director, year, rating, poster_url

  const { title, director, year, your_rating, poster_url } = body

  const errors = []
  if(!title)                                errors.push('title is required')
  if(!director)                             errors.push('director is required')
  if(!year)                                 errors.push('year is required')
  if(year < 1900 || year > 2100)            errors.push('please provide a valid year')
  if(!your_rating)                          errors.push('rating is required')
  if(your_rating < 1 || your_rating > 5)    errors.push('rating must be between 1 and 5')
  if(!poster_url)                           errors.push('poster url is required')

  if(errors.length > 0) {
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
  createMovie,
  updateMovie,
  deleteMovie
}