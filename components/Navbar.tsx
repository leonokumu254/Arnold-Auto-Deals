import React, { useState, useEffect } from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="brand">
            <div className="brand-logo">A</div>
            <h1 className="brand-name">ARNOLD AUTO DEALS</h1>
        </div>

        <button 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#inventory" onClick={() => setIsOpen(false)}>Inventory</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#location" onClick={() => setIsOpen(false)}>Location</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Happy Clients</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};