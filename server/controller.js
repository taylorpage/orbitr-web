var Subscription = require('./models/subscription');

module.exports = controller = {
  addSubscriber: function(req, res) {
    return Subscription.create({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    .then(function(model) {
      return res.send('Subscription created for email: ' + model.email);
    })
    .catch(function(err) {
      console.error(err.message);
      res.status(400);
      return res.send(err.message);
    });
  }
}