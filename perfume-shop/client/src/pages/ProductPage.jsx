import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ImageGallery from '../components/ImageGallery';
import ProductInfo from '../components/ProductInfo';
import ReviewsList from '../components/ReviewsList';
import AddReviewForm from '../components/AddReviewForm';
import LoadingSpinner from '../components/LoadingSpinner';
import './ProductPage.css';

// Full product detail page
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const [productRes, reviewsRes] = await Promise.all([
        axios.get(`/api/products/${id}`),
        axios.get(`/api/products/${id}/reviews`)
      ]);
      setProduct(productRes.data);
      setReviews(reviewsRes.data);
    } catch (err) {
      setError('Unable to load product details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleReviewAdded = (newReview) => {
    setReviews([newReview, ...reviews]);
    
    // Update product rating and count locally for instant UI update
    const newCount = product.reviewCount + 1;
    const currentTotal = product.rating * product.reviewCount;
    const newRating = (currentTotal + newReview.rating) / newCount;
    
    setProduct({
      ...product,
      reviewCount: newCount,
      rating: newRating
    });
  };

  if (loading) return <div className="page-container center"><LoadingSpinner /></div>;
  
  if (error) return (
    <div className="page-container center error-container">
      <p className="error-text">{error}</p>
      <button className="btn-retry" onClick={fetchData}>Retry</button>
    </div>
  );

  if (!product) return <div className="page-container center">Product not found.</div>;

  return (
    <div className="product-page fade-in">
      <div className="product-main-grid">
        <div className="pg-gallery">
          <ImageGallery images={product.images} />
        </div>
        <div className="pg-info">
          <ProductInfo product={product} />
        </div>
      </div>
      
      <div className="product-reviews-container">
        <ReviewsList 
          reviews={reviews} 
          averageRating={product.rating} 
          totalReviews={product.reviewCount} 
        />
        <AddReviewForm productId={product._id} onReviewAdded={handleReviewAdded} />
      </div>
    </div>
  );
};

export default ProductPage;
