var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/secretFancy');

var port = process.env.PORT || 8000;

var routes = require('./app/routes/routes');
app.use('/api', routes);

app.listen(port);
console.log('Listening on port ' + port);