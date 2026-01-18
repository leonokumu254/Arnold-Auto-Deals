import React, { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=1920', // Muddy/Terrain SUV
    title: 'Conquer Every Terrain',
    subtitle: 'Rugged reliability meets luxury. Explore our premium SUV collection.',
    cta: 'View SUVs'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1920', // Luxury/Mercedes
    title: 'Elegance Redefined',
    subtitle: 'Experience the pinnacle of comfort and prestige with our luxury lineup.',
    cta: 'Shop Luxury'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80&w=1920', // Sports/Performance
    title: 'Unleash the Thrill',
    subtitle: 'Performance vehicles that make every drive an adventure.',
    cta: 'View Sport'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1920', // City/Urban
    title: 'Smart Urban Living',
    subtitle: 'Fuel-efficient, compact choices for the modern city driver.',
    cta: 'See City Cars'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=1920', // Import/Custom
    title: 'Your Dream, Delivered',
    subtitle: 'We source custom imports directly from Japan, UK & Germany just for you.',
    cta: 'Start Request'
  }
];

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay">
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <a href="#inventory" className="btn-hero">{slide.cta}</a>
            </div>
          </div>
        </div>
      ))}
      
      {/* Controls */}
      <button className="arrow left" onClick={prevSlide}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="arrow right" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Indicators */}
      <div className="dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};