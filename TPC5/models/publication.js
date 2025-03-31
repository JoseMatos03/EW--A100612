const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  type: String,
  id: String,
  authors: [String],
  title: String,
  booktitle: String,
  address: String,
  year: String,
  month: String,
  doi: String
});

module.exports = mongoose.model('Publication', publicationSchema);
