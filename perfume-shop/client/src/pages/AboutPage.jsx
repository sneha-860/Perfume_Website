import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* SECTION 1 - HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-label">OUR STORY</p>
          <h1 className="about-headin">The Art of Fine Perfumery</h1>
          <p className="about-subtext">
            Founded in the heart of Paris, Lumière brings centuries
            of artisanal perfumery into the modern era.
          </p>
        </div>
      </section>

      {/* SECTION 2 - STORY */}
      <section className="about-story">
        <div className="about-story-visual">
          <img 
            src="https://images.unsplash.com/photo-1615655986865-36b8c019b1c3?w=600" 
            alt="Lumière Craftsmanship" 
            className="about-story-image"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600';
            }}
          />
        </div>
        <div className="about-story-text">
          <h2>Crafted With Purpose</h2>
          <p>
            We believe that a fragrance is more than a scent — it is
            an invisible signature, a memory preserved in a bottle.
            Every bottle is meticulously crafted using ethically
            sourced ingredients and rare botanicals.
          </p>
          <p>
            From the deep ouds of the orient to the delicate petals
            of French rose valleys, we blend the world's most
            exquisite notes to create unforgettable experiences.
          </p>
          <button
            className="about-btn"
            onClick={() => document.getElementById('values')?.scrollIntoView({ behavior: 'smooth' })}
          >
            DISCOVER OUR VALUES
          </button>
        </div>
      </section>

      {/* SECTION 3 - VALUES */}
      <section className="about-values" id="values">
        <h2 className="about-values-heading">What We Stand For</h2>
        <div className="about-values-grid">
          <div className="about-value-card">
            <span className="value-icon">✦</span>
            <h3>Craftsmanship</h3>
            <p>Every bottle crafted with centuries of French
            perfumery tradition passed down through generations.</p>
          </div>
          <div className="about-value-card">
            <span className="value-icon">◈</span>
            <h3>Authenticity</h3>
            <p>Only the finest ethically sourced ingredients
            from around the world make it into our bottles.</p>
          </div>
          <div className="about-value-card">
            <span className="value-icon">❋</span>
            <h3>Experience</h3>
            <p>Each fragrance tells a story that lingers long
            after you have left the room.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 - STATS */}
      <section className="about-stats">
        <div className="about-stat">
          <span className="stat-number">500+</span>
          <span className="stat-label">Fragrances Created</span>
        </div>
        <div className="about-stat">
          <span className="stat-number">50K+</span>
          <span className="stat-label">Happy Customers</span>
        </div>
        <div className="about-stat">
          <span className="stat-number">12</span>
          <span className="stat-label">Years of Excellence</span>
        </div>
      </section>

    </div>
  );
}
