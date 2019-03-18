'use strict';
module.exports = function(app) {
  var trees = require('../controllers/treesController');

  // trees Routes
  app.route('/trees')
    .get(trees.index)
};