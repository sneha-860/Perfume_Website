import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';
import { useWishlist } from '../hooks/useWishlist';
import './ProductCard.css';

// Fetches and displays all products in a responsive grid
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product._id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    try {
      const cart = JSON.parse(localStorage.getItem('lumiere_cart') || '[]');
      const firstSize = product.sizes && product.sizes[0] ? product.sizes[0] : { size: 'Default', price: product.price };

      const existingItemIndex = cart.findIndex(
        item => item.productId === product._id && item.selectedSize === firstSize.size
      );

      if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
      } else {
        cart.push({
          productId: product._id,
          name: product.name,
          price: firstSize.price,
          selectedSize: firstSize.size,
          image: product.images[0],
          quantity: 1
        });
      }

      localStorage.setItem('lumiere_cart', JSON.stringify(cart));
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { action: 'added' } }));
    } catch {}
  };

  // FIX 4: Heart toggles wishlist, does NOT navigate
  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    try {
      toggleWishlist(product._id);
    } catch {}
  };

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product._id}`)}>
      <div className="card-image-wrapper">
        <img src={product.images[0]} alt={product.name} className="product-image" />
        {product.badge && <span className="badge">{product.badge}</span>}

        {/* FIX 4: Wishlist heart button */}
        <button
          className={`heart-btn ${wishlisted ? 'wishlisted' : ''}`}
          onClick={handleWishlistToggle}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {wishlisted ? '♥' : '♡'}
        </button>

        <button className="add-to-cart-overlay" onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <div className="card-body">
        <p className="product-brand">{product.brand}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-tagline">{product.tagline}</p>

        <div className="rating-row">
          <StarRating rating={product.rating} />
          <span className="review-count">({product.reviewCount})</span>
        </div>

        <p className="product-price">₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
