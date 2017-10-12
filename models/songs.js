var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema ({
  track:  String,
  likeCount: Number,
});

module.exports = mongoose.model("Song", SongSchema);