const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/products');

// Initialize main Express server application
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware configuration
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Root route - API status
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: '🌸 Perfume Shop API is running',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
    }
  });
});

// API route mapping
app.use('/api/products', productRoutes);

// Database connection and server listening
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
