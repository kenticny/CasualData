var db = require('./db');
var Schema = db.mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var projectSchema = new Schema({
    name: { type: String },
    owner: { type: ObjectId, ref: 'User'},
    reportNumber: { type: Number, default: 0 },
    dataCount: { type: Number, default: 0 },
    createTime: { type: Number, default: Date.now }
});

db.mongoose.model('Project', projectSchema);

module.exports = db.mongoose.model('Project');