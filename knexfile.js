// Update with your config settings.
const path = require('path')
const env = 'dev'

module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://localhost/movie_crud_${env}`,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    }, 
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    }, 
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  }
}
