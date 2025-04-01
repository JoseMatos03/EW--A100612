const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  _id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  series: { type: String },
  author: [{ type: String }],
  rating: { type: String },
  description: { type: String },
  language: { type: String },
  isbn: { type: String },
  genres: [{ type: String }],
  characters: [{ type: String }],
  bookFormat: { type: String },
  edition: { type: String },
  pages: { type: String },
  publisher: { type: String },
  publishDate: { type: String },
  firstPublishDate: { type: String },
  awards: [{ type: String }],
  numRatings: { type: String },
  ratingsByStars: [{ type: String }],
  likedPercent: { type: String },
  setting: [{ type: String }],
  coverImg: { type: String },
  bbeScore: { type: String },
  bbeVotes: { type: String },
  price: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);
