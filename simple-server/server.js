var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
fs = require("fs");

app.listen(port);

app.get('/list', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  fs.readFile(__dirname + "/" + "list.json", 'utf8', function (err, data) {
    res.end(data);
  });
})

console.log('list RESTful API server started on: ' + port);