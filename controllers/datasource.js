var _ = require('underscore');

var DataSource = require('../models/datasource');

exports.createDataSource = function(data, callback) {
    var fields = ['name', 'fields', 'owner', 'type'];
    var dataSourceData = _.pick(data, fields);

    new DataSource(dataSourceData).save(callback);
};