const mongoose = require('mongoose');

// Schema for perfume products including name, brand, sizes, and ratings
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  tagline: { type: String },
  description: { type: String },
  price: { type: Number, required: true },
  sizes: [{
    size: { type: String },
    price: { type: Number }
  }],
  images: [String],
  category: { type: String },
  badge: { type: String },
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
