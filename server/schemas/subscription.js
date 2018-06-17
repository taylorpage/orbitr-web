var mongoose = require('mongoose');

var Subscription = mongoose.Schema;

var SubscriptionSchema = new Subscription({
  email: {
    type: String,
    unique: true,
    required: true
  },
  firstName: String,
  lastName: String
});

module.exports = SubscriptionSchema;