'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'movies.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: {
      default: 25,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/movies', service(options));

  // Get our initialize service to that we can bind hooks
  const movieService = app.service('/movies');

  // Set up our before hooks
  movieService.before(hooks.before);

  // Set up our after hooks
  movieService.after(hooks.after);
};
