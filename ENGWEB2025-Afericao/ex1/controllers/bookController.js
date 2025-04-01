const Book = require('../models/book');

// GET /books - Lista todos os livros
exports.getAllBooks = async (req, res) => {
  try {
    const { character, genre } = req.query;
    let filter = {};

    if (character) {
      filter.characters = { $regex: character, $options: 'i' };
    }
    if (genre) {
      filter.genres = genre;
    }

    const books = await Book.find(filter);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /books/:id - Obtém um livro pelo ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /books/genres - Lista de géneros ordenada e sem repetições
exports.getDistinctGenres = async (req, res) => {
  try {
    const genres = await Book.distinct('genres');
    genres.sort();
    res.json(genres);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /books/characters - Lista de personagens ordenada e sem repetições
exports.getDistinctCharacters = async (req, res) => {
  try {
    const characters = await Book.distinct('characters');
    characters.sort();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /books - Adiciona um novo livro
exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /books/:id - Remove um livro pelo ID
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /books/:id - Atualiza um livro pelo ID
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
