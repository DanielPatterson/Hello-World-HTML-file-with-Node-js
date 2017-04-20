var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/app.html'));
});

app.listen(8080);

console.log('Running on localhost http://127.0.0.1:8080');