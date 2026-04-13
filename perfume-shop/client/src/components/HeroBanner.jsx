import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './HeroBanner.css';

// Full-width hero section with headline and CTA button
const HeroBanner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleShopClick = () => {
    if (location.pathname === '/') {
      // Already on homepage — smooth scroll to collection
      const el = document.getElementById('collection');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to homepage with hash
      navigate('/#collection');
    }
  };

  return (
    <section className="hero">
      <div className="hero-content fade-in">
        <p className="hero-label">NEW COLLECTION 2024</p>
        <h1 className="hero-title">Discover Your Signature Scent</h1>
        <p className="hero-subtitle">
          Explore our curated collection of luxury fragrances
        </p>
        <button className="cta-button" onClick={handleShopClick}>
          Shop New Arrivals
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
