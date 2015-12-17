var DataSource = require('../controllers/datasource');

var utils = require('../utils/validate');
var messages = require('../messages');

exports.createDataSource = function(req, res, next) {
    var name = req.body.name;
    var type = req.body.type;
    var fields = req.body.fields;

    var userId = req.session.user.id;

    var postData = {
        name: name, type: type,
        fields: fields, owner: userId
    };

    var nullFields = utils.validateNullFields(postData);

    if(nullFields.length > 0) {
        return next(messages.error.MISSING_PARAMETERS(nullFields));
    }

    DataSource.createDataSource(postData, function(err, result) {
        if(err) {
            return next(err);
        }
        if(!result || !result._id) {
            return next(messages.error.OPERATE_FAILED());
        }
        res.send(messages.success.ok(result));
    });
};