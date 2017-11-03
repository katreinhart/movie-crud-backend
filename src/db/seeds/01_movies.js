// "title", "director", "year", "your rating", and "poster url"

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Blade Runner 2049', director: 'Denis Villaneuve', year: 2017, your_rating: 5, poster_url: 'http://www.joblo.com/posters/images/full/runner-poster-main-large.jpg'},
        {id: 2, title: 'The Force Awakens', director: 'JJ Abrams', year: 2015, your_rating: 4, poster_url: 'http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/10/star-wars-force-awakens-official-poster.jpg'},
      ]);
    });
};
