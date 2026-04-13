import React from 'react';
import './SkeletonCard.css';

// Animated placeholder shimmer card shown while loading products
const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-body">
        <div className="skeleton-text brand"></div>
        <div className="skeleton-text name"></div>
        <div className="skeleton-text tagline"></div>
        <div className="skeleton-text rating"></div>
        <div className="skeleton-text price"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
