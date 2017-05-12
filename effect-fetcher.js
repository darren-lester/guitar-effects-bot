const fetch = require('node-fetch');

const randomEffectURL = 'http://www.effectsdatabase.com/random/effect';

function fetchEffect() {
  return fetch(randomEffectURL).then(function(res) {
    return {
      url: res.url
    };
  });
}

module.exports = {
  fetch: fetchEffect
};
