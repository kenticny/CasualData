var db = require('./db');
var Schema = db.mongoose.Schema;

var userSchema = new Schema({
    username: { type: String },
    password: { type: String, length: 32 },
    email: { type: String },
    userType: { type: Number, default: 1 },
    createTime: { type: Number, default: Date.now },
    lastLoginTime: {type: Number, default: Date.now }
});

db.mongoose.model('User', userSchema);

module.exports = db.mongoose.model('User');