const mongoose = require('mongoose');

const Post = mongoose.model('Post', new mongoose.Schema({
  name: String,
  department: String,
  skills: String,
}));
module.exports = Post;
