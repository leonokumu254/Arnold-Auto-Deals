import React, { useState } from 'react';
import { Car } from '../types';
import './CarModal.css';

interface CarModalProps {
  car: Car;
  onClose: () => void;
}

export const CarModal: React.FC<CarModalProps> = ({ car, onClose }) => {
  const [activeImage, setActiveImage] = useState(car.main_image_url);
  const allImages = [car.main_image_url, ...car.interior_images_urls];

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        
        {/* Left Side: Gallery */}
        <div className="modal-gallery">
          <img 
            src={activeImage} 
            alt="Active View" 
            className="main-view"
          />
          <div className="thumbnails">
            {allImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="thumbnail"
                onClick={() => setActiveImage(img)}
                className={`thumb ${activeImage === img ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="modal-details">
          <button onClick={onClose} className="close-modal-btn">
            <i className="fas fa-times"></i>
          </button>

          <p style={{textTransform: 'uppercase', color: '#888', fontSize: '0.8rem', fontWeight: 'bold'}}>
            {car.category}
          </p>
          <h2 style={{fontSize: '2rem', margin: '0.5rem 0'}}>{car.make} {car.model}</h2>
          <span style={{background: '#eee', padding: '4px 10px', borderRadius: '20px', fontSize: '0.9rem'}}>
            Year: {car.year}
          </span>

          <div className="modal-price">
            {car.price}
          </div>

          <div style={{marginTop: '1rem'}}>
            <h4 style={{borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '0.5rem'}}>Description</h4>
            <p style={{color: '#555', lineHeight: '1.6'}}>
              {car.description}
            </p>
          </div>

          <a 
            href={`mailto:arnold@autodeals.com?subject=Inquiry about ${car.year} ${car.make} ${car.model} (${car.id})`}
            className="contact-btn"
          >
            <i className="fas fa-envelope" style={{marginRight: '8px'}}></i> 
            Contact Arnold About This Car
          </a>
          <p style={{textAlign: 'center', fontSize: '0.75rem', color: '#aaa', marginTop: '1rem'}}>Reference ID: {car.id}</p>
        </div>
      </div>
    </div>
  );
};