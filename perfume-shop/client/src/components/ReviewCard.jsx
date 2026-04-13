import React from 'react';
import StarRating from './StarRating';
import './ReviewCard.css';

// Single review display
const ReviewCard = ({ review }) => {
  const formattedDate = new Date(review.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="review-card">
      <div className="rc-header">
        <span className="rc-author">{review.author}</span>
        <span className="rc-date">{formattedDate}</span>
      </div>
      
      <div className="rc-rating">
        <StarRating rating={review.rating} interactive={false} />
      </div>
      
      <h4 className="rc-title">{review.title}</h4>
      <p className="rc-body">{review.body}</p>
    </div>
  );
};

export default ReviewCard;
