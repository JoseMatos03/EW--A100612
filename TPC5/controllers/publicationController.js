const Publication = require('../models/publication');

// Lista todas as publicações
exports.getAll = async (req, res) => {
  try {
    const publications = await Publication.find();
    res.render('list', { publications });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Mostra o formulário para criar uma nova publicação
exports.createForm = (req, res) => {
  res.render('create');
};

// Cria uma nova publicação
exports.create = async (req, res) => {
  try {
    if (req.body.authors) {
      req.body.authors = req.body.authors.split(',').map(a => a.trim());
    }
    await Publication.create(req.body);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err);
  }
};

// Mostra uma publicação em detalhe
exports.getById = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    res.render('detail', { publication });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Formulário para editar uma publicação
exports.updateForm = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    res.render('edit', { publication });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Atualiza a publicação
exports.update = async (req, res) => {
  try {
    if (req.body.authors) {
      req.body.authors = req.body.authors.split(',').map(a => a.trim());
    }
    await Publication.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err);
  }
};

// Remove uma publicação
exports.delete = async (req, res) => {
  try {
    await Publication.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err);
  }
};
