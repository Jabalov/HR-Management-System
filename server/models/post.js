var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  name: String,
  department: String,
  skills :String
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
