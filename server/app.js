// import files and packages up here
var data = require('./data.json');


// create your express server below
var express = require('express');
var morgan = require('morgan');
var app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.send('Hello, World!');
});

app.get('/data', function (req, res) {
    res.send(data);
});


module.exports = app;