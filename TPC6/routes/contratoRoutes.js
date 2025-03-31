const express = require('express');
const router = express.Router();
const contratoController = require('../controllers/contratoController');

router.get('/entidades', contratoController.getDistinctEntidades);
router.get('/tipos', contratoController.getDistinctTipos);
router.get('/:id', contratoController.getContratoById);
router.get('/', contratoController.getAllContratos);
router.post('/', contratoController.createContrato);
router.delete('/:id', contratoController.deleteContrato);
router.put('/:id', contratoController.updateContrato);

module.exports = router;
