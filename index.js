const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.send('<a href="https://twitter.com/effectsbot">Guitar Effects Bot</a>');
});

app.listen(port, function() {
  console.log(`Guitar Effects Bot is listening on port ${port}!`);
});
