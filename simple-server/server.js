var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
fs = require("fs");

app.listen(port);

app.get('/list', function (req, res) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  fs.readFile(__dirname + "/" + "list.json", 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
})

console.log('list RESTful API server started on: ' + port);