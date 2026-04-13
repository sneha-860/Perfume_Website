import React, { useState } from 'react';
import StarRating from './StarRating';
import Toast from './Toast';
import './ProductInfo.css';

// Product details, size selector, and action buttons
const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [showShare, setShowShare] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('lumiere_cart') || '[]');
    const existingItemIndex = cart.findIndex(
      item => item.productId === product._id && item.selectedSize.size === selectedSize.size
    );

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({
        productId: product._id,
        name: product.name,
        price: selectedSize.price,
        selectedSize: selectedSize.size,
        image: product.images[0],
        quantity: 1
      });
    }

    localStorage.setItem('lumiere_cart', JSON.stringify(cart));
    
    // Dispatch custom event for Navbar to update badge
    window.dispatchEvent(new Event('cartUpdated'));

    setToastMessage('Added to cart! 🛒');
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const shareText = `Check out ${product.name}`;
  const pageURL = window.location.href;

  return (
    <div className="product-info">
      <p className="pi-brand">{product.brand}</p>
      <h1 className="pi-name">{product.name}</h1>
      
      <div className="pi-rating-row">
        <StarRating rating={product.rating} />
        <span className="pi-review-text">{product.rating.toFixed(1)} ({product.reviewCount} reviews)</span>
      </div>
      
      <div className="pi-price">₹{selectedSize.price}</div>
      
      <hr className="pi-divider" />
      
      <p className="pi-size-label">Select Size</p>
      <div className="pi-size-options">
        {product.sizes.map((s, idx) => (
          <button
            key={idx}
            className={`size-btn ${selectedSize.size === s.size ? 'selected' : ''}`}
            onClick={() => setSelectedSize(s)}
          >
            {s.size}
          </button>
        ))}
      </div>
      
      <hr className="pi-divider" />
      
      <p className="pi-desc">{product.description}</p>
      
      <div className="pi-actions">
        <button className="btn-add-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="btn-wishlist">
          Add to Wishlist
        </button>
      </div>
      
      <div className="pi-share-section">
        <button className="btn-share-toggle" onClick={() => setShowShare(!showShare)}>
          Share this fragrance ↗
        </button>
        
        {showShare && (
          <div className="share-panel">
            <a 
              href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + pageURL)}`} 
              target="_blank" 
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageURL)}&text=${encodeURIComponent(shareText)}`} 
              target="_blank" 
              rel="noreferrer"
            >
              Twitter/X
            </a>
            <button onClick={handleCopyLink} className="btn-copy">
              {linkCopied ? '✓ Copied!' : 'Copy Link'}
            </button>
          </div>
        )}
      </div>

      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
};

export default ProductInfo;
