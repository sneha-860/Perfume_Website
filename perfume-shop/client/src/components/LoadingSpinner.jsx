import React from 'react';
import './LoadingSpinner.css';

// Centered loading spinner for async data states
const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
