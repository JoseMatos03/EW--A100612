const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.get('/books/genres', bookController.getDistinctGenres);
router.get('/books/characters', bookController.getDistinctCharacters);
router.post('/books', bookController.createBook);
router.delete('/books/:id ', bookController.deleteBook);
router.put('/books/:id', bookController.updateBook);

module.exports = router;
