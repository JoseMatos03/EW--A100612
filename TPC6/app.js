const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contratosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Set view engine to Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); // For static files if needed

// API Routes
const contratoRoutes = require('./routes/contratoRoutes');
app.use('/contratos', contratoRoutes);

// View Routes
const viewRoutes = require('./routes/viewRoutes');
app.use('/', viewRoutes);

const PORT = 16001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
