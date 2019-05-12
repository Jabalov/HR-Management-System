const express = require('express');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const { User } = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send('Invalid user name or password!');
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid user name or password!');
  const token = user.generateAuthToken();
  res.send(token);
});
function validate(req) {
  const schema = {
    username: Joi.string().regex(/^[a-z][a-z0-9]*/).min(5)
      .max(255)
      .required(),
    password: Joi.string().min(5).max(255).required(),
  };
  return Joi.validate(req, schema);
}

module.exports = router;
