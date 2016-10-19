const express = require('./config/express.js');

const app = express();

app.listen(8887, function() {
  console.log('I am listening on port 8887');
});
