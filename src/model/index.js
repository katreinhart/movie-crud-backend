const knex = require('../db')

const getAllMovies = () => knex('movies')

const getOneMovie = (id) => knex('movies')
  .select('*')
  .where('id', id)

module.exports = {
  getAllMovies,
  getOneMovie
}