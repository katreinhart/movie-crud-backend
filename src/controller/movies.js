const { Movie } = require('../model')
const fields = ['title', 'director', 'year', 'your_rating', 'poster_url']

const index = (req, res, next) => {
  Movie.index().then(movies => {
    res.status(200).json({ data: movies })
  })
}

const show = (req, res, next) => {
  Movie.find(req.params.id).then(movie => {
    if(movie) res.status(200).json({ data: movie })
    else res.status(404).json({ error: `Movie with id ${req.params.id} not found.` })
  })
}

const create = (req, res, next) => {
  Movie.create(req.body).then(movie => {
    res.status(200).json({ data: movie }) 
  })
  .catch(err => {
    res.status(400).json({ error: 'Something went wrong.' })
  })
}

const put = (req, res, next) => {
  Movie.put(req.params.id, req.body).then(movie => {
    res.status(200).json({ data: movie })
  })
  .catch(err => {
    res.status(400).json({ error: 'Something went wrong.' })
  })
}

const del = (req, res, next) => {
  Movie.del(req.params.id).then(movie => {
    res.status(200).json({ data: movie })
  })
  .catch(err => {
    res.status(400).json({ error: 'Something went wrong' })
  })
}

const exists = (req, res, next) => {
  Movie.find(req.params.id).then(movie => {
    if(movie) next()
    else {
      const status = 404
      const message = `Movie with id ${req.params.id} not found`
      next({ status, message })
    }
  })
}

const complete = (req, res, next) => {
  const errors = fields.filter(field => !req.body[field])
    .map(key => `${key} is a required field`)

  if(req.body.year < 1900 || req.body.year > 2100)            errors.push('please provide a valid year')
  if(req.body.your_rating < 1 || req.body.your_rating > 5)    errors.push('rating must be between 1 and 5')

  if(errors.length > 0) {
    const status = 400
    const message = errors
    return next ({ status, message })
  }
  return next()
}

const prune = (req, res, next) => {
  Object.keys(req.body).forEach(key => {
    if (!fields.includes(key)) delete req.body[key]
  })
  return next()
}

module.exports = {
  index,
  show,
  create,
  put,
  del,
  validations: { exists, prune, complete }
}