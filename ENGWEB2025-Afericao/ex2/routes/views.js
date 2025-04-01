const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Id slug
const slugify = name => name.toLowerCase().replace(/\s+/g, '-');

router.get('/entidades/:authorId', async (req, res) => {
  try {
    const allBooks = await Book.find({});
    const filteredBooks = allBooks.filter(book =>
      book.author.some(a => slugify(a) === req.params.authorId)
    );

    let authorName = null;
    if (filteredBooks.length > 0) {
      for (let book of filteredBooks) {
        const match = book.author.find(a => slugify(a) === req.params.authorId);
        if (match) {
          authorName = match;
          break;
        }
      }
    }

    res.render('author', {
      authorId: req.params.authorId,
      authorName,
      books: filteredBooks,
      total: filteredBooks.length
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    res.render('index', { books });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Livro não encontrado');
    res.render('book', { book });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
