var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var RelationSchema = new Schema({
	'Name' : String,
	'RepresentativePhrase' : String,
	'ObjectType' : String,
	'SubjectType' : String
});

module.exports = mongoose.model('Relation', RelationSchema);