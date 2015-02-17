var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FancySchema = new Schema({
  delivery: String,
  first_name: String,
  match_name: String,
  phone: String,
    email: String,
    message: String,
    user: {
    email: String,
    first_name: String,
    gender: String,
    id: String,
    last_name: String,
    link: String,
    locale: String,
    name: String,
    timezone: Number,
    updated_time: String,
    verified: Boolean
  }
});

module.exports = mongoose.model('Fancy', FancySchema);