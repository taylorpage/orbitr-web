//Install express server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controller');
const port = process.env.PORT || 8080;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/../dist/orbitr-web'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/subscribe', controller.addSubscriber);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../dist/orbitr-web/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port, function() {
  console.log('Listening on port ' + port + '...');
});

