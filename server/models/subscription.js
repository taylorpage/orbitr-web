var mongoose = require('../db');
var subscriptionSchema = require('../schemas/subscription');

var Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;