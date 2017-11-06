const knex = require('../db')

const getAllMovies = () => knex('movies')

const getOneMovie = (id) => knex('movies')
  .select('*')
  .where('id', id)

const createMovie = (body) => {
  const {
    title,
    director,
    year,
    your_rating,
    poster_url
  } = body
  
  return knex('movies')
    .insert({
      title,
      director,
      year,
      your_rating,
      poster_url
    })
    .returning('*')
}

const updateMovie = (id, body) => {
  const { 
    title,
    director, 
    year,
    your_rating,
    poster_url
  } = body
  return knex('movies')
    .where('id', id)
    .update({
      title,
      director,
      year,
      your_rating,
      poster_url
    })
    .returning('*')
}

const deleteMovie = (id) => {
  return knex('movies')
    .where('id', id)
    .returning('*')
    .del()
}


module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteMovie
}