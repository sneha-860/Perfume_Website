const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Review = require('../models/Review');

// Returns all products from the database
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Returns a single product by its MongoDB _id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Returns all reviews for a given product id
router.get('/:id/reviews', async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.id }).sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Adds a new review for a product and updates product rating and reviewCount
router.post('/:id/reviews', async (req, res) => {
  try {
    const { author, rating, title, body } = req.body;
    const newReview = new Review({
      productId: req.params.id,
      author,
      rating,
      title,
      body
    });

    const savedReview = await newReview.save();

    // Update product metrics
    const product = await Product.findById(req.params.id);
    if (product) {
      const allReviews = await Review.find({ productId: req.params.id });
      const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;
      
      product.rating = avgRating;
      product.reviewCount = allReviews.length;
      await product.save();
    }

    res.status(201).json(savedReview);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
