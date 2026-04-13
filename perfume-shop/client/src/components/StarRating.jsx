import React, { useState } from 'react';
import './StarRating.css';

// Reusable star rating — display mode and interactive mode
const StarRating = ({ rating, maxStars = 5, interactive = false, onRate }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const displayRating = interactive ? (hoverRating || rating) : rating;

  return (
    <div className={`star-rating ${interactive ? 'interactive' : ''}`}>
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= displayRating;
        
        return (
          <span
            key={index}
            className={`star ${isFilled ? 'filled' : 'empty'}`}
            onMouseEnter={() => interactive && setHoverRating(starValue)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            onClick={() => interactive && onRate && onRate(starValue)}
          >
            {isFilled ? '★' : '☆'}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
