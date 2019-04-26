const mongoose = require("mongoose");
const Joi = require('joi');

const User = mongoose.model('User',new mongoose.Schema({
  name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
  },
  password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
  },
  
}));


module.exports = Post;
