import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../hooks/useWishlist';
import './WishlistDrawer.css';

const WishlistDrawer = ({ isOpen, onClose, onToast }) => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch product details for wishlisted IDs
  useEffect(() => {
    if (!isOpen || wishlist.length === 0) {
      setProducts([]);
      return;
    }
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data.filter(p => wishlist.includes(p._id)));
      } catch {}
    };
    fetchProducts();
  }, [isOpen, wishlist]);

  const handleAddToCart = (product) => {
    try {
      const cart = JSON.parse(localStorage.getItem('lumiere_cart') || '[]');
      const firstSize = product.sizes?.[0] ?? { size: 'Default', price: product.price };
      const idx = cart.findIndex(
        i => i.productId === product._id && i.selectedSize === firstSize.size
      );
      if (idx > -1) {
        cart[idx].quantity += 1;
      } else {
        cart.push({
          productId: product._id,
          name: product.name,
          price: firstSize.price,
          selectedSize: firstSize.size,
          image: product.images[0],
          quantity: 1,
        });
      }
      localStorage.setItem('lumiere_cart', JSON.stringify(cart));
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { action: 'added' } }));
      onToast('Added to cart! 🛒');
    } catch {}
  };

  return (
    <>
      <div
        className={`drawer-overlay ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
      />
      <aside className={`wishlist-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h2 className="drawer-title">Your Wishlist</h2>
          <button className="drawer-close" onClick={onClose} aria-label="Close wishlist">✕</button>
        </div>

        <div className="drawer-body">
          {wishlist.length === 0 ? (
            <div className="drawer-empty">
              <p>Your wishlist is empty.<br />Start exploring!</p>
            </div>
          ) : (
            <ul className="wishlist-items-list">
              {products.map(product => (
                <li key={product._id} className="wishlist-item">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="wishlist-item-img"
                    onClick={() => { navigate(`/product/${product._id}`); onClose(); }}
                    style={{ cursor: 'pointer' }}
                  />
                  <div className="wishlist-item-info">
                    <p className="wishlist-item-name">{product.name}</p>
                    <p className="wishlist-item-brand">{product.brand}</p>
                    <p className="wishlist-item-price">₹{product.price}</p>
                    <button
                      className="wishlist-add-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <button
                    className="wishlist-remove-btn"
                    onClick={() => removeFromWishlist(product._id)}
                    aria-label="Remove from wishlist"
                  >✕</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
};

export default WishlistDrawer;
