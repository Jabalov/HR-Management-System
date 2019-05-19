const jwt = require('jsonwebtoken');
const config = require('config');

// eslint-disable-next-line func-names
module.exports = function (req, res, next) {
  const token = req.header('token');
  if (!token) return res.status(401).send('Access Denied. No token provided.');

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decoded;
    if (!req.user.hr) return res.status(401).send('Access Denied. You are  not authorized.');
    next();
  } catch (ex) {
    res.status(400).send('Invalid Token');
  }
};
