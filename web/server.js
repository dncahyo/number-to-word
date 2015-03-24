var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

require('./app/routes.js')(app);

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('app listening at http://%s:%s', host, port)
});