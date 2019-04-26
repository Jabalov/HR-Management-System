const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const Post = require('../models/post');

// get all
router.get('/', auth, async (req, res) => {
  await Post.find({}, (error, posts) => {
    if (error) console.error(error);
    res.send({ posts });
  }).sort({ _id: -1 });
});

// get one by id
router.get('post/:id', auth, async (req, res) => {
  await Post.findById(req.params.id, 'name skills', (error, post) => {
    if (error) console.error(error);

    res.send(post);
  });
});

// post new Employer
router.post('/add_post', auth, async (req, res) => {
  const new_post = new Post({
    name: req.body.name,
    department: req.body.department,
    skills: req.body.skills,
  });

  await new_post.save((error) => {
    if (error) console.log(error);

    res.send({ success: true });
  });
});

// edit one employer
router.put('/:id', auth, async (req, res) => {
  await Post.findById(req.params.id, 'name department', (error, post) => {
    if (error) console.error(error);

    post.name = req.body.name;
    post.department = req.body.department;
    post.skills = req.body.skills;

    post.save((error) => {
      if (error) console.log(error);

      res.send({ success: true });
    });
  });
});

// delete by id
router.delete('/:id', auth, async (req, res) => {
  await Post.remove({ _id: req.params.id }, (err, post) => {
    if (err) res.send(err);
    res.send({ success: true });
  });
});

module.exports = router;
