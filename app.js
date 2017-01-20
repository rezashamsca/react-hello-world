var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
  res.send('Hello World');
});

app.use('/', express.static('public'));

app.listen(process.env.port || 3000, "0.0.0.0", 511, function(){
  console.log('Example app listening on port 3000!');
});
