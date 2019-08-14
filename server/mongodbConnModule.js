const mongoose = require('mongoose');

module.exports.connect = () => {
  mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/Employers', {
    useCreateIndex: true,
    useNewUrlParser: true,
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', () => {
    console.log('Connection Succeeded');
  });
  return db;
};
