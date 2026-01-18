import React from 'react';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 'bold'}}>About Us</h2>
            <div className="divider" style={{margin: '1rem auto'}}></div>
            <p style={{color: '#666', fontSize: '1.1rem'}}>Driving Dreams Since 2008</p>
        </div>

        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-bg-accent"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Arnold" 
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h3 style={{fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem'}}>Our Mission</h3>
            <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: '#555'}}>
              At Arnold Auto Deals, our mission is simple: to provide high-quality, reliable vehicles with unmatched transparency. We bridge the gap between international markets and local needs, ensuring every Kenyan driver finds their perfect match.
            </p>

            <h3 style={{fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem'}}>Meet Arnold</h3>
            <p style={{fontSize: '1rem', marginBottom: '1.5rem', color: '#555', lineHeight: '1.7'}}>
              What started as a passion project in a single garage has grown into the region's most trusted dealership. Arnold founded this company on the belief that buying a car should be exciting, not stressful. With over 15 years of experience in sourcing both local gems and Japanese imports, Arnold personally vets every vehicle that enters our lot.
            </p>
            
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem'}}>
                <div style={{background: 'var(--primary-red)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-certificate fa-lg"></i>
                </div>
                <div>
                    <h5 style={{fontWeight: 'bold'}}>Certified Dealer</h5>
                    <p style={{fontSize: '0.9rem', color: '#888'}}>Licensed & Insured</p>
                </div>
            </div>
          </div>
        </div>

        {/* Core Values / Why Choose Us */}
        <div className="values-grid">
            <div className="value-card">
                <div className="value-icon"><i className="fas fa-check-circle"></i></div>
                <h4>Quality Assured</h4>
                <p>Every car undergoes a rigorous 150-point inspection before sale.</p>
            </div>
            <div className="value-card">
                <div className="value-icon"><i className="fas fa-globe"></i></div>
                <h4>Global Sourcing</h4>
                <p>Direct access to auctions in Japan, UK, and Germany for custom orders.</p>
            </div>
            <div className="value-card">
                <div className="value-icon"><i className="fas fa-handshake"></i></div>
                <h4>Fair Pricing</h4>
                <p>No hidden fees. We offer the most competitive market rates in Kenya.</p>
            </div>
        </div>
      </div>
    </section>
  );
};