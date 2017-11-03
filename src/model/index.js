const knex = require('../db')

const getAllMovies = () => {
  console.log('get all movies model')
  return knex('movies')
}

module.exports = {
  getAllMovies
}