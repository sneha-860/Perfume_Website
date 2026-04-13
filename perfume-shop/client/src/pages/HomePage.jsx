import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroBanner from '../components/HeroBanner';
import OffersStrip from '../components/OffersStrip';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard';
import Toast from '../components/Toast';
import AboutSection from '../components/AboutSection';
import './HomePage.css';

// Renders homepage sections in order
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get('/api/products');
      setProducts(res.data);
    } catch (err) {
      setError('Unable to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    
    const handleCartUpdated = (e) => {
      if (e.detail?.action === 'added') {
        setToastMessage('Added to cart! 🛒');
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000);
      }
    };
    
    window.addEventListener('cartUpdated', handleCartUpdated);
    return () => window.removeEventListener('cartUpdated', handleCartUpdated);
  }, []);

  return (
    <div className="home-page fade-in">
      <HeroBanner />
      <OffersStrip />
      
      <section className="product-grid-section" id="collection">
        <h2 className="section-heading">Our Collection</h2>
        
        {error ? (
          <div className="error-container">
            <p className="error-text">{error}</p>
            <button className="btn-retry" onClick={fetchProducts}>Retry</button>
          </div>
        ) : (
          <div className="product-grid">
            {loading 
              ? Array(8).fill(null).map((_, i) => <SkeletonCard key={`skeleton-${i}`} />)
              : products.map(product => <ProductCard key={product._id} product={product} />)
            }
          </div>
        )}
      </section>
      
      <AboutSection />
      
      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
};

export default HomePage;
