'use strict';

// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var  express = require('./config/express');
var mongoose = require('./config/mongoose');

var CONST = require('./config/constants');


//Create a new Mongoose connection instance
var db = mongoose();

// Create a new Express application instance

var app = express();

var helloWorld = function(req, res, next) { 
	res.setHeader('Content-Type', 'text/plain');
	res.end(CONST.FOO);
};
app.use(helloWorld);


// Use the Express application instance to listen to the '3000' port
app.listen(8081);


// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;