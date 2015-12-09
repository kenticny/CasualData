var express = require('express');
var path = require('path');

var routes = require('./routes');

var app = express();

// use templates
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// static files
app.use(express.static(path.join(__dirname, '/public')));

// router
app.use(routes);

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Casual Data listening at http://%s:%s', host, port);
});