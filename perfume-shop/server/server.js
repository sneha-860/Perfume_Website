const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/products');

// Initialize main Express server application
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware configuration
const allowedOrigins = [
  'http://localhost:3000',
  process.env.CLIENT_URL
].filter(Boolean);
app.use(cors({ 
  origin: allowedOrigins,
  credentials: true 
}));
app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API route mapping
app.use('/api/products', productRoutes);

// Database connection and server listening
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      // Server started successfully
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
  });
