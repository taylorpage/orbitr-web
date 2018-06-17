const controller = require('./controller');
const path = 'orb://orbitr.io/'

const routes = {
  [path + 'subscribe']: controller.addSubscriber
};

const fetch = function(url, payload) {
  return routes[url](payload)
    .then(function(res) {
      return res;
    })
    .class(function(err) {
      return err;
    });
};

module.exports = fetch;