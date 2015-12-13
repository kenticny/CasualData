var express = require('express');
var path = require('path');

var routes = require('./routes');

var app = express();

// use templates
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// static files
app.use(express.static(path.join(__dirname, '/public')));

// for Dev Environment
app.use(function(req, res, next) {
    req.session = {};
    req.session.user = {
        id: '566c6224a5b1729c39d42c42'
    };
    next();
});


// router
app.use(routes);

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Casual Data listening at http://%s:%s', host, port);
});