const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const publicationRouter = require('./routes/publicationRouter');

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

// Configurar a ligação ao MongoDB
mongoose.connect('mongodb://localhost:27017/pubs')
.then(() => console.log('MongoDB ligado!'))
.catch(err => console.error(err));

app.set('view engine', 'pug');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', publicationRouter);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor a correr na porta ${port}`);
});
