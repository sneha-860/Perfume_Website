import React, { useEffect, useState } from 'react';
import './Toast.css';

// Temporary notification that auto-dismisses after 3 seconds
const Toast = ({ message, visible }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [visible, message]);

  if (!show) return null;

  return (
    <div className="toast slide-in">
      {message}
    </div>
  );
};

export default Toast;
