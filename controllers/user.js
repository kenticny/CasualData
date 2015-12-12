var _ = require('underscore');

var encryption = require('../utils/encrypt');

var User = require('../models/user');

exports.createUser = function(data, callback) {
    var fields = ['username', 'password', 'email'];
    var userData = _.pick(data, fields);

    userData.password = encryption.hmacSha1(userData.password);

    new User(userData).save(callback);
};