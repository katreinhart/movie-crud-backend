// "title", "director", "year", "your rating", and "poster url"

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Blade Runner 2049', director: 'Denis Villaneuve', year: 2017, your_rating: 5, poster_url: 'http://www.joblo.com/posters/images/full/runner-poster-main-large.jpg'},
        {id: 2, title: 'The Force Awakens', director: 'JJ Abrams', year: 2015, your_rating: 4, poster_url: 'http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/10/star-wars-force-awakens-official-poster.jpg'},
        {id: 3, title: 'The Empire Strikes Back', director: 'Irvin Kershner', year: 1980, your_rating: 4, poster_url: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'},
        {id: 4, title: 'The Fifth Element', director: 'Luc Besson', year: 1997, your_rating: 5, poster_url: 'http://barkerhost.com/wp-content/uploads/sites/4/2017/03/5P6ZeKN2rJzRp1CfEO0RNczKiZj-1.jpg'},
        {id: 5, title: 'Valerian', director: 'Luc Besson', year: 2017, your_rating: 4, poster_url: 'https://pbs.twimg.com/media/DA-jEcwWAAAxDIg.jpg'}
      ]);
    });
};
