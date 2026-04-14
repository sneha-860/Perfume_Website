import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  const navigate = useNavigate();
  
  const handleDiscoverStory = () => {
    navigate('/about');
  };
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800"
            alt="Lumière Heritage" 
            className="about-image"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800';
            }}
          />
        </div>
        <div className="about-content">
          <h2 className="about-heading">About Us</h2>
          
          <p className="about-text">
            Founded in the heart of Paris, Lumière brings centuries of artisanal perfumery into the modern era. We believe that a fragrance is more than a scent—it is an invisible signature, a memory preserved in a bottle.
          </p>
          <p className="about-text">
            Every bottle is meticulously crafted using ethically sourced ingredients and rare botanicals. From the deep ouds of the orient to the delicate petals of French rose valleys, we blend the world's most exquisite notes to create unforgettable olfactory experiences.
          </p>
          <button className="about-btn" onClick={handleDiscoverStory}>
            Discover Our Story
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
