import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img 
            src="https://placehold.co/800x1000/c9a84c/0a0a0a?text=Lumi%C3%A8re+Heritage" 
            alt="Lumière Heritage" 
            className="about-image"
          />
        </div>
        <div className="about-content">
          <h2 className="about-heading">The Art of Fine Perfumery</h2>
          <p className="about-text">
            Founded in the heart of Paris, Lumière brings centuries of artisanal perfumery into the modern era. We believe that a fragrance is more than a scent—it is an invisible signature, a memory preserved in a bottle.
          </p>
          <p className="about-text">
            Every bottle is meticulously crafted using ethically sourced ingredients and rare botanicals. From the deep ouds of the orient to the delicate petals of French rose valleys, we blend the world's most exquisite notes to create unforgettable olfactory experiences.
          </p>
          <button className="about-btn">Discover Our Story</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
