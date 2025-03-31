const Contrato = require('../models/contrato');

exports.getAllContratos = async (req, res) => {
  try {
    const { entidade, tipo } = req.query;
    let filter = {};

    if (entidade) {
      filter.entidade_comunicante = entidade;
    }
    if (tipo) {
      filter.tipoprocedimento = tipo;
    }

    const contratos = await Contrato.find(filter);
    res.json(contratos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getContratoById = async (req, res) => {
  try {
    const contrato = await Contrato.findOne({ idcontrato: req.params.id });
    if (!contrato) {
      return res.status(404).json({ error: 'Contrato not found' });
    }
    res.json(contrato);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDistinctEntidades = async (req, res) => {
  try {
    const entidades = await Contrato.distinct('entidade_comunicante');
    entidades.sort(); // Sort alphabetically
    res.json(entidades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDistinctTipos = async (req, res) => {
  try {
    const tipos = await Contrato.distinct('tipoprocedimento');
    tipos.sort();
    res.json(tipos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createContrato = async (req, res) => {
  try {
    const newContrato = new Contrato(req.body);
    await newContrato.save();
    res.status(201).json(newContrato);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteContrato = async (req, res) => {
  try {
    const contrato = await Contrato.findOneAndDelete({ idcontrato: req.params.id });
    if (!contrato) {
      return res.status(404).json({ error: 'Contrato not found' });
    }
    res.json({ message: 'Contrato deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateContrato = async (req, res) => {
  try {
    const contrato = await Contrato.findOneAndUpdate(
      { idcontrato: req.params.id },
      req.body,
      { new: true }
    );
    if (!contrato) {
      return res.status(404).json({ error: 'Contrato not found' });
    }
    res.json(contrato);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
