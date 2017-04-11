'use strict';

// Load the module dependencies
var	config = require('./config'),
	mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {


	// Use Mongoose to connect to MongoDB
	mongoose.Promise = global.Promise;
	var db = mongoose.connect(config.db);
	require('../app/models/Items.js');
	
	return db;
}