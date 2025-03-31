const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contratoSchema = new Schema({
  idcontrato: { type: Number, required: true, unique: true },
  nAnuncio: { type: String },
  tipoprocedimento: { type: String },
  objectoContrato: { type: String },
  dataPublicacao: { type: Date },
  dataCelebracaoContrato: { type: Date },
  precoContratual: { type: Number },
  prazoExecucao: { type: Number },
  NIPC_entidade_comunicante: { type: Number },
  entidade_comunicante: { type: String },
  fundamentacao: { type: String }
});

module.exports = mongoose.model('Contrato', contratoSchema);
