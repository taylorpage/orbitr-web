//Install express server
const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/../dist/orbitr-web'));

app.get('/subscribe', function(req, res) {
  res.send('poop');
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../dist/orbitr-web/index.html'));
});

db.connect('mongodb://localhost:27017/orbitr_db', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
  } else {
    // Start the app by listening on the default Heroku port
    app.listen(process.env.PORT || 8080, function() {
      console.log('Listening on port 8080...');
    })
  }
})

