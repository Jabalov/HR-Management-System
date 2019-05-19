
/* eslint-disable linebreak-style */
const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();
const Task = require('../models/tasks');

// get all
router.get('/', [auth],  async (req, res) => {
    await Task.find({}, (error, allPosts) => {
        if (error) console.error(error);
        res.send({ allPosts });
    }).sort({ _id: -1 });
});

// get one by id
router.get('post/:id', [auth], async (req, res) => {
    await Task.findById(req.params.id, 'name skills', (error, post) => {
        if (error) console.error(error);

        res.send(post);
    });
});

// post new Employer
router.post('/add_post', [auth], async (req, res) => {
    const new_post = new Task({
        name: req.body.name,
        department: req.body.department,
        endsAt: req.body.endsAt,
        by: req.body.by
    });
    await new_post.save((error) => {
        if (error) console.log(error);

        res.send({ success: true });
    });
});

// edit one employer
// router.put('/:id', [auth], async (req, res) => {
//     await Task.findById(req.params.id, 'name department', (error, post) => {
//         if (error) console.error(error);

//         post.name = req.body.name;
//         post.department = req.body.department;
//         post.endsAt = req.body.endsAt;
//         post.by = req.body.by;

//         post.save((error) => {
//             if (error) console.log(error);

//             res.send({ success: true });
//         });
//     });
// });

// delete by id
router.delete('/:id', [auth], async (req, res) => {
    await Task.remove({ _id: req.params.id }, (err, post) => {
        if (err) res.send(err);
        res.send({ success: true });
    });
});

module.exports = router;
