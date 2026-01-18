import React from 'react';
import './BrandShowcase.css';

export const BrandShowcase: React.FC = () => {
  // CONFIGURATION: Replace the logo URLs below with your own image paths or links.
  // Example: logo: '/images/toyota-logo.png' or 'https://example.com/my-logo.jpg'
  const brands = [
    { name: 'Toyota', logo: 'https://logo.clearbit.com/toyota.com' },
    { name: 'Nissan', logo: 'https://logo.clearbit.com/nissan-global.com' },
    { name: 'Mazda', logo: 'https://logo.clearbit.com/mazda.com' },
    { name: 'Honda', logo: 'https://logo.clearbit.com/honda.com' },
    { name: 'Subaru', logo: 'https://logo.clearbit.com/subaru.com' },
    { name: 'Mitsubishi', logo: 'https://logo.clearbit.com/mitsubishi-motors.com' },
    { name: 'Suzuki', logo: 'https://logo.clearbit.com/globalsuzuki.com' },
    { name: 'Mercedes', logo: 'https://logo.clearbit.com/mercedes-benz.com' },
    { name: 'BMW', logo: 'https://logo.clearbit.com/bmw.com' },
    { name: 'Volkswagen', logo: 'https://logo.clearbit.com/vw.com' },
    { name: 'Audi', logo: 'https://logo.clearbit.com/audi.com' },
    { name: 'Land Rover', logo: 'https://logo.clearbit.com/landrover.com' },
  ];

  return (
    <section className="brand-showcase">
      <div className="container">
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
                className="brand-logo"
                onError={(e) => {
                    // Fallback if logo fails
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=' + brand.name[0];
                }}
              />
              <span className="brand-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};