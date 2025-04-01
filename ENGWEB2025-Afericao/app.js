const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Routers
const apiRouter = require('./routes/api');      // API definida anteriormente
const viewsRouter = require('./routes/views');  // Novo router para as views

const app = express();

// Configuração do Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware para ler JSON no body (caso necessário para a API)
app.use(express.json());

// Ligação à BD (ajusta a string de conexão conforme necessário)
mongoose.connect('mongodb://localhost:27017/afericao')
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error(err));

// Monta os routers
app.use('/api', apiRouter); // API, ex: /api/books
app.use('/', viewsRouter);  // Views, ex: / e /:id, /entidades/:authorId

const PORT = 17001;
app.listen(PORT, () => console.log(`Servidor a correr na porta ${PORT}`));
