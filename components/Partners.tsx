import React from 'react';
import './Partners.css';

export const Partners: React.FC = () => {
  const partners = [
    { name: "Gybird Motors", icon: "fa-car-side" },
    { name: "Nairobi Auto Bazaar", icon: "fa-shop" },
    { name: "KCB Asset Finance", icon: "fa-building-columns" },
    { name: "AA Kenya", icon: "fa-shield-halved" },
    { name: "Japan Imports Ltd", icon: "fa-ship" },
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <h3 style={{fontSize: '1.2rem', color: '#888', textTransform: 'uppercase', letterSpacing: '2px'}}>Our Trusted Partners</h3>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              <div className="partner-icon-box">
                <i className={`fas ${partner.icon}`}></i>
              </div>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};