import React, { useState } from 'react';
import './ImageGallery.css';

// Product image gallery with thumbnail switching
const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isFading, setIsFading] = useState(false);

  const handleThumbnailClick = (img) => {
    if (img === selectedImage) return;
    setIsFading(true);
    setTimeout(() => {
      setSelectedImage(img);
      setIsFading(false);
    }, 150);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="image-gallery">
      <div className="main-image-container">
        <img 
          src={selectedImage} 
          alt="Product" 
          className={`main-image ${isFading ? 'fade-out' : 'fade-in'}`} 
        />
      </div>
      
      {images.length > 1 && (
        <div className="thumbnails">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${selectedImage === img ? 'selected' : ''}`}
              onClick={() => handleThumbnailClick(img)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
