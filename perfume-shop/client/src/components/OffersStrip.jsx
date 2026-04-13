import React from 'react';
import './OffersStrip.css';

// Professional offers strip — no emojis, elegant typographic separators
const OffersStrip = () => {
  const offers = [
    'FREE SHIPPING ON ORDERS OVER ₹2000',
    '20% OFF YOUR FIRST ORDER — CODE: LUMIERE20',
    'NEW LAUNCHES EVERY FRIDAY',
  ];

  const separator = <span className="offers-sep">✦</span>;

  return (
    <div className="offers-strip">
      {/* Desktop: single row */}
      <div className="offers-desktop">
        {offers.map((offer, i) => (
          <React.Fragment key={i}>
            <span className="offer-text">{offer}</span>
            {i < offers.length - 1 && separator}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile: marquee */}
      <div className="offers-marquee">
        <div className="marquee-track">
          {[...offers, ...offers].map((offer, i) => (
            <React.Fragment key={i}>
              <span className="offer-text">{offer}</span>
              <span className="offers-sep">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersStrip;
