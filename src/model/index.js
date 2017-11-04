const knex = require('../db')

const getAllMovies = () => knex('movies')

const getOneMovie = (id) => knex('movies')
  .select('*')
  .where('id', id)

const createMovie = (body) => {
  
}



module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie
}