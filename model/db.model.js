var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var urlBaseSchema = new Schema({
   _modID : {type :Number , index : true},
   url : String
});
module.exports = mongoose.model('urlBase' , urlBaseSchema);
