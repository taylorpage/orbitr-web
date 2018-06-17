var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI || 'mongodb://127.0.0.1/orbitr_db';

var connection = mongoose.createConnection(mongoDB, function(err, res) {
  var message = err ? 'MongoDB connection error' : 'MongoDB Connected';
  console.log(message);
});

mongoose.Promise = Promise;

module.exports = connection;