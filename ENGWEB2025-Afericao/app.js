const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Routers
const apiRouter = require('./ex1/api/bookAPI');
const viewsRouter = require('./ex2/routes/views');

const app = express();

// Configuração do Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'ex2/views'));

// Middleware para ler JSON no body (caso necessário para a API)
app.use(express.json());

// Ligação à BD
mongoose.connect('mongodb://localhost:27017/livros')
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error(err));

app.use('/', apiRouter);
app.use('/', viewsRouter);

const PORT = 17001;
app.listen(PORT, () => console.log(`Servidor a correr na porta ${PORT}`));
