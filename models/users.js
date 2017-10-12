var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
  username:  String,
  password: String,
  song: [{ type: Schema.Types.ObjectId, ref: 'Song' }]
});

module.exports = mongoose.model("User", UserSchema);