var express = require('express');
var router = express.Router();

var Project = require('./project');

router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/project/create', Project.createProject);

module.exports = router;