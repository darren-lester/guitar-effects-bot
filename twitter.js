const Twit = require('twit');
const config = require('./config.js');

const T = new Twit(config);

function tweet(data, callback) {
  T.post('statuses/update', { status: data.url }, callback);
}

module.exports = {
  tweet: tweet
};
