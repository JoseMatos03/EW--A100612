const express = require('express');
const router = express.Router();
const Contrato = require('../models/contrato');

router.get('/', async (req, res) => {
  try {
    const contratos = await Contrato.find();
    res.render('index', { title: 'Lista de Contratos', contratos });
  } catch (err) {
    res.status(500).send('Erro ao carregar contratos.');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const contrato = await Contrato.findOne({ idcontrato: req.params.id });
    if (!contrato) {
      return res.status(404).send('Contrato não encontrado.');
    }
    res.render('contrato', { title: `Contrato ${contrato.idcontrato}`, contrato });
  } catch (err) {
    res.status(500).send('Erro ao carregar contrato.');
  }
});

router.get('/entidades/:nipc', async (req, res) => {
  try {
    const contratos = await Contrato.find({ NIPC_entidade_comunicante: req.params.nipc });
    if (contratos.length === 0) {
      return res.status(404).send('Entidade não encontrada.');
    }

    const entidade = contratos[0].entidade_comunicante;
    const totalValor = contratos.reduce((sum, c) => sum + c.precoContratual, 0);

    res.render('entidade', { title: `Entidade ${entidade}`, entidade, contratos, totalValor });
  } catch (err) {
    res.status(500).send('Erro ao carregar entidade.');
  }
});

module.exports = router;
