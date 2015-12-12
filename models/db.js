var mongoose = require('mongoose');

var config = require('../config');

mongoose.connect(config.db.uri, function(err) {
    if(err) {
        console.error("MongoDB Connect Error:" + err);
        process.exit(-1);
    }
});

exports.mongoose = mongoose;