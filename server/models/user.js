/* eslint-disable no-underscore-dangle */
const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    unique: true
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  hr: {
    type: Boolean,
    required: true
  }
});
// eslint-disable-next-line func-names
userSchema.methods.generateAuthToken = function() {
  return jwt.sign({ _id: this._id, hr: this.hr }, config.get("jwtPrivateKey"));
};
const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    username: Joi.string()
      .regex(/^[a-z][a-z0-9]*/)
      .min(5)
      .max(255)
      .required(),
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
    hr: Joi.boolean().required()
  };
  return Joi.validate(user, schema);
}

module.exports.User = User;
module.exports.validate = validateUser;
