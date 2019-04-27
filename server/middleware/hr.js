/* eslint-disable func-names */
module.exports = function (req, res, next) {
  if (!req.body.hr) return res.status(403).send('Access Denied');
  next();
};
