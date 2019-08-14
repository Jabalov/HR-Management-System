const mongoose = require('mongoose');

const Post = mongoose.model('Task', new mongoose.Schema({
    name: String,
    department: String,
    endsAt: String,
    by: Number


}));


// Post.create([{
//     name: "Finishing HR App",
//     department: "UX/UI",
//     endsAt: "20,May,2019",
//     by: 5
// },
//     {
//         name: "Facebook analysis",
//         department: "R&D",
//         endsAt: "20,June,2019",
//         by: 7
//     },
//     {
//         name: "Finishing HR App API",
//         department: "DevOps",
//         endsAt: "10,May,2019",
//         by: 13
//     },
// ])
module.exports = Post;
