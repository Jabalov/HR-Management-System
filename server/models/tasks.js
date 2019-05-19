const mongoose = require('mongoose');

const Post = mongoose.model('Task', new mongoose.Schema({
    name: String,
    department: String,
    endsAt: String,
    by: Number


}));
module.exports = Post;
