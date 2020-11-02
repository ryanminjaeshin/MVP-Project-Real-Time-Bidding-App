const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvp-rtb', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('Lovely MongoDB is connected');
});
