const _ = require("lodash");
const express = require("express");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/me", auth, async (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.get("/all", async (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const user = await User.find().select("-password");
  res.send(user);
});
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ username: req.body.username });

  if (user) return res.status(400).send("The user name is already taken");
  user = new User(_.pick(req.body, ["username", "name", "password", "hr"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  res.header("token", token).send(_.pick(user, ["_id", "username", "name"]));
});

// admin account.
async function createAdmin() {
  const admin = new User({
    username: "admin",
    name: "Administrator",
    password: "admin",
    hr: true
  });
  const salt = await bcrypt.genSalt(10);
  admin.password = await bcrypt.hash(admin.password, salt);
  await admin.save();
}

// eslint-disable-next-line func-names
createAdmin().catch(async () => {
  const salt = await bcrypt.genSalt(10);
  User.replaceOne(
    { username: "admin" },
    {
      username: "admin",
      name: "Administrator",
      password: await bcrypt.hash("admin", salt),
      hr: true
    }
  ).exec();
});

module.exports = router;
