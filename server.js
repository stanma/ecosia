var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Trees = require('./api/models/TreesModel');

var routes = require('./api/routes/treesRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port);

console.log('trees RESTful API server started on: ' + port);

module.exports = app;