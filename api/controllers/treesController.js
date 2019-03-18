'use strict';

var Trees = require('./../models/TreesModel');

exports.index = function(req, res) {
  res.json(Trees.getFavourite());
};