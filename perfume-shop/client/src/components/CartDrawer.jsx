import React from 'react';
import { useCart } from '../hooks/useCart';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose, onToast }) => {
  const { cart, totalCount, increaseQty, decreaseQty, removeItem } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    onToast('Checkout coming soon! 🛍️');
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`drawer-overlay ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h2 className="drawer-title">Your Cart</h2>
          <button className="drawer-close" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        <div className="drawer-body">
          {cart.length === 0 ? (
            <div className="drawer-empty">
              <p>Your cart is empty</p>
              <button className="drawer-continue-btn" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <ul className="cart-items-list">
                {cart.map(item => (
                  <li key={`${item.productId}-${item.selectedSize}`} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-img"
                    />
                    <div className="cart-item-info">
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-size">{item.selectedSize}</p>
                      <p className="cart-item-price">₹{item.price}</p>
                    </div>
                    <div className="cart-item-controls">
                      <div className="qty-controls">
                        <button
                          className="qty-btn"
                          onClick={() => decreaseQty(item.productId, item.selectedSize)}
                        >−</button>
                        <span className="qty-count">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => increaseQty(item.productId, item.selectedSize)}
                        >+</button>
                      </div>
                      <button
                        className="cart-remove-btn"
                        onClick={() => removeItem(item.productId, item.selectedSize)}
                        aria-label="Remove item"
                      >✕</button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-footer">
                <div className="cart-subtotal">
                  <span>Subtotal</span>
                  <span className="subtotal-amount">₹{subtotal.toLocaleString()}</span>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;
