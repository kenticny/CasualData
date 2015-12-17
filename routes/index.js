var express = require('express');
var router = express.Router();

var Project = require('./project');
var DataSource = require('./datasource');

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/projects', Project.listProjects);
router.get('/project/:name', Project.findProjectByName);
router.post('/project/create', Project.createProject);

router.post('/datasource/create', DataSource.createDataSource);

module.exports = router;