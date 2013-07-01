var express = require('express');

var app = express();

app.use(express.static(__dirname + '/..'));
app.use(express.logger('dev'));
app.use(express.bodyParser());

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.post('/upload', function (req, res) {
  if (req.files.file) { return res.send(200); }
  res.send(400);
});

app.post('/failure', function (req, res) {
  res.send(500, 'something blew up');
});


app.listen(3000);
