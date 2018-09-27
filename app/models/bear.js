var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
	name: String,
	park: String,
	 description: {type:String},
    path: {type:String},
    cover_path: {type:String},
    tag: String 
});

module.exports = mongoose.model('Bear', BearSchema);
