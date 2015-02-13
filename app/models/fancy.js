var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FancySchema = new Schema({
    first_name: String,
    email: String,
    message: String
});

module.exports = mongoose.model('Fancy', FancySchema);