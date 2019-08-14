const mongoose = require('mongoose');

const Post = mongoose.model('Post', new mongoose.Schema({
  name: String,
  department: String,
  skills: String,
}));

// Post.create([{
//   name: "Mohamed Nashaat",
//   department: "UX/UI",
//   skills: "Photgraphy,Video Editing",

// },
// {
//   name: "Ahmed ElGendy",
//   department: "R&D",
//   skills: "Programming,Research",
// },
// {
//   name: "Mohamed AboJabal",
//   department: "BackEnd",
//   skills: "NodeJS,Data Structure",
//   },
//   {
//     name: "Somaya ElBaradey",
//     department: "BackEnd",
//     skills: "NodeJS,DataBase",
//   },
// ])
module.exports = Post;
