var db = require('./db');
var Schema = db.mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var dataSourceSchema = new Schema({
    name: { type: String },
    fields: { type: Array, default: [] },
    type: { type: String, default: 'general' },
    owner: { type: ObjectId, ref: 'User' },
    createTime: { type: Number, default: Date.now },
});

db.mongoose.model('DataSource', dataSourceSchema);

module.exports = db.mongoose.model('DataSource');