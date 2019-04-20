var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  skills: {
    type: String
  },
  dept: {
    type: String
  },
  runningTasks: {
    type: String
  }
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
