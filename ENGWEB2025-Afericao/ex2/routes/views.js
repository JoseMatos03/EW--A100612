const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Função utilitária para gerar um slug (id do autor) a partir do nome do autor
const slugify = name => name.toLowerCase().replace(/\s+/g, '-');

// Rota para a página do autor (deve vir antes da rota de livro para evitar conflito)
router.get('/entidades/:authorId', async (req, res) => {
  try {
    // Obter todos os livros
    const allBooks = await Book.find({});
    // Filtrar livros cujo array de autores contenha algum nome cujo slug corresponda ao parâmetro
    const filteredBooks = allBooks.filter(book =>
      book.author.some(a => slugify(a) === req.params.authorId)
    );

    // Obter o nome do autor a partir do primeiro livro que corresponder
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

// Rota principal: lista de livros
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    res.render('index', { books });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Rota para exibir detalhes de um livro (usar o _id do livro)
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
