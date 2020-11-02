const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvp-rtb', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('Lovely MongoDB is connected');
});

/*---------------------------------------------------------*/

// Schema
const gallerySchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  category: String,
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
});

// Model
const Gallery = mongoose.model('Gallery', gallerySchema);

/*---------------------------------------------------------*/
