var Subscription = require('./models/subscription');

module.exports = controller = {
  addSubscriber: function(payload) {
    return Subscription.create({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });
  }
}