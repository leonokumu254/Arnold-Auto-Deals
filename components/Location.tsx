import React from 'react';
import './Location.css';

export const Location: React.FC = () => {
  return (
    <section id="location" className="location-section">
      <div className="container">
        <div style={{textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 'bold'}}>Visit Our Showroom</h2>
            <p style={{color: '#666', marginTop: '0.5rem'}}>Come see our inventory in person. Coffee is on us!</p>
        </div>

        <div className="location-content">
          <div className="location-info">
            <div className="info-item">
              <h4><i className="fas fa-map-marker-alt"></i> Address</h4>
              <p>
                Arnold Auto Deals HQ<br />
                Ngong Road, Near Prestige Plaza<br />
                Nairobi, Kenya
              </p>
            </div>

            <div className="info-item">
              <h4><i className="fas fa-clock"></i> Opening Hours</h4>
              <p>
                <strong>Mon - Fri:</strong> 8:00 AM - 6:00 PM<br />
                <strong>Saturday:</strong> 9:00 AM - 4:00 PM<br />
                <strong>Sunday:</strong> Closed (Appointments Only)
              </p>
            </div>

            <div className="info-item">
              <h4><i className="fas fa-phone-volume"></i> Direct Line</h4>
              <p>
                +254 700 123 456<br />
                sales@arnoldautodeals.com
              </p>
            </div>
          </div>

          <div className="location-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.16664213768!2d36.78657615!3d-1.2996954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109985b37699%3A0x6b73e54546416597!2sNgong%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1689600000000!5m2!1sen!2ske" 
              className="map-frame"
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Arnold Auto Deals Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};