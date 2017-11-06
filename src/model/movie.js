const knex = require('../db')

const index = () => knex('movies')

const find = (id) => knex('movies')
  .select('*')
  .where('id', id)
  .first()

const create = (body) => {
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

const put = (id, body) => {
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

const del = (id) => {
  return knex('movies')
    .where('id', id)
    .returning('*')
    .del()
}

module.exports = {
  index,
  find,
  create,
  put,
  del
}