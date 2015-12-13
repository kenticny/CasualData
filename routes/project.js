var Project = require('../controllers/project');

var messages = require('../messages');

exports.listProjects = function(req, res, next) {

};

exports.createProject = function(req, res, next) {
    var name = req.body.name;
    var userId = req.session.user.id;

    if(!name) {
        return next(messages.error.MISSING_PARAMETERS(['name']));
    }

    var projectData = { name: name, owner: userId };

    Project.createProject(projectData, function(err, result) {
        if(err) {
            return next(err);
        }
        if(!result._id) {
            return next(messages.error.OPERATE_FAILED());
        }
        res.send(messages.success.ok());
    });
};