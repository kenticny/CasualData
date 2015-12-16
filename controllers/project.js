var _ = require('underscore');

var Project = require('../models/project');

exports.createProject = function(data, callback) {
    var fields = ['name', 'owner'];
    var projectData = _.pick(data, fields);

    new Project(projectData).save(callback);
};

exports.listProjectsByUser = function(userId, callback) {
    Project.find({ owner: userId }, callback);
};

exports.findProjectByName = function(name, callback) {
    Project.findOne({ name: name }, callback);
};