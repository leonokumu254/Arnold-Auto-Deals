import React from 'react';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <h2 style={{fontSize: '2.5rem', fontWeight: 'bold'}}>Get In Touch</h2>
        <p style={{color: '#ccc', maxWidth: '600px', margin: '1rem auto'}}>
          Ready to find your next ride? Contact us via phone, email, or your favorite social platform.
        </p>
        
        <div className="contact-icons">
           {/* Phone App Trigger */}
           <a href="tel:+1234567890" className="contact-item">
              <i className="fas fa-phone"></i>
              <span>Call Us</span>
           </a>

           {/* Email */}
           <a href="mailto:arnold@autodeals.com" className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>Email</span>
           </a>

           {/* WhatsApp */}
           <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fa-brands fa-whatsapp"></i>
              <span>WhatsApp</span>
           </a>

           {/* Instagram */}
           <a href="#" className="contact-item">
              <i className="fa-brands fa-instagram"></i>
              <span>Instagram</span>
           </a>

           {/* TikTok */}
           <a href="#" className="contact-item">
              <i className="fa-brands fa-tiktok"></i>
              <span>TikTok</span>
           </a>
        </div>
      </div>
    </section>
  );
};