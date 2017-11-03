// "title", "director", "year", "your rating", and "poster url"

exports.up = knex => {
  return knex.schema.createTable('movies', table => {
    table.increments()
    table.string('title').notNullable().defaultsTo('')
    table.string('director').notNullable().defaultsTo('')
    table.integer('year').notNullable().defaultsTo(0)
    table.integer('your_rating').notNullable().defaultsTo(3)
    table.string('poster_url').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = knex => knex.schema.dropTable('movies')