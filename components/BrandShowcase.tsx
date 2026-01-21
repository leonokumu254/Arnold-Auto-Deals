import React from 'react';
import './BrandShowcase.css';

export const BrandShowcase: React.FC = () => {
  // CONFIGURATION: Replace the logo URLs below with your own image paths or links.
  // Example: logo: '/images/toyota-logo.png' or 'https://example.com/my-logo.jpg'
  const brands = [
    { name: 'Toyota', logo: '/Images/toyota_svg.svg' },
    { name: 'Nissan', logo: '/Images/nissan.svg' },
    { name: 'Mazda', logo: '/Images/mazda.svg' },
    { name: 'Honda', logo: '/Images/honda.svg' },
    { name: 'Subaru', logo: 'Images/subaru.svg' },
    { name: 'Mitsubishi', logo: 'Images/mitsubishi.svg' },
    { name: 'Suzuki', logo: 'Images/suzuki.svg' },
    { name: 'Mercedes', logo:'Images/mercedes.svg' },
    { name: 'BMW', logo: 'Images/bmw.svg' },
    { name: 'Volkswagen', logo: 'Images/volkswagen.svg' },
    { name: 'Audi', logo: 'Images/audi.svg' },
    { name: 'Land Rover', logo: 'Images/landrover.svg' },
    { name: 'Lexus', logo: 'Images/lexus.svg' }
  ];

  return (
    <section className="brand-showcase">
      <div className="container"><fieldset disabled="disabled"></fieldset>
        <div className="brand-header">
          <h3>Top Brands We Stock</h3>
          <div className="divider" style={{margin: '0.5rem auto', width: '40px'}}></div>
        </div>
        
        <div className="brand-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item" title={brand.name}>
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="brand-logo-"
                
              />
              <span className="brand-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};