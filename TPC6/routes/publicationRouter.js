const express = require('express');
const router = express.Router();
const publicationController = require('../controllers/publicationController');

// Rota para listar todas as publicações
router.get('/', publicationController.getAll);

// Rota para o formulário de criação
router.get('/new', publicationController.createForm);

// Rota para criar uma publicação
router.post('/', publicationController.create);

// Rota para ver detalhes de uma publicação
router.get('/:id', publicationController.getById);

// Rota para o formulário de edição
router.get('/:id/edit', publicationController.updateForm);

// Rota para atualizar a publicação
router.post('/:id/edit', publicationController.update);

// Rota para eliminar a publicação
router.post('/:id/delete', publicationController.delete);

module.exports = router;
