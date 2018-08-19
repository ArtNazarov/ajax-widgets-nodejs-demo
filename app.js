var http = require('http')
var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  var fs = require('fs');
  fs.readFile('public/index.html', 'utf8', function(err, contents) {
    res.send(contents);
  });
});
 

app.get('/echoService', function (req, res) {
  var id = req.query.id;
  res.send(id);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
