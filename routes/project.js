var async = require('async');

var Project = require('../controllers/project');

var messages = require('../messages');

/**
 * list project by user
 * @param  {Object}   req  request
 * @param  {Object}   res  response
 * @param  {Function} next next middleware
 */
exports.listProjects = function(req, res, next) {
    var userId = req.session.user.id;

    Project.listProjectsByUser(userId, function(err, results) {
        if(err) {
            return next(err);
        }
        res.send(messages.success.ok(results));
    });
};

/**
 * create project
 * @param  {Object}   req  request
 * @param  {Object}   res  response
 * @param  {Function} next next middleware
 */
exports.createProject = function(req, res, next) {
    var name = req.body.name;
    var userId = req.session.user.id;

    if(!name) {
        return next(messages.error.MISSING_PARAMETERS(['name']));
    }

    var projectData = { name: name, owner: userId };

    async.waterfall([

        // check the project name existence
        async.apply(Project.findProjectByName, projectData.name),
        async.apply(createProject, projectData)
    ], function(err, result) {
        if(err) {
            return next(messages.error.handle(err));
        }
        if(!result || !result._id) {
            return next(messages.error.OPERATE_FAILED());
        }
        res.send(messages.success.ok());
    });

    // if project name not exist, create project
    function createProject(projectData, existProject, callback) {
        if(existProject) {
            return callback(messages.error.PROJECT_NAME_EXIST());
        }
        Project.createProject(projectData, callback);
    };
};

/**
 * find project by name
 * @param  {Object}   req  request
 * @param  {Object}   res  response
 * @param  {Function} next next middleware
 */
exports.findProjectByName = function(req, res, next) {
    var name = req.params.name;

    if(!name) {
        return next(messages.error.MISSING_PARAMETERS(['name']));
    }

    Project.findProjectByName(name, function(err, result) {
        if(err) {
            return next(err);
        }
        res.send(messages.success.ok(result));
    });
};