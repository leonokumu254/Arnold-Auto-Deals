import React from 'react';
import { Car } from '../types';
import './Testimonials.css';

interface TestimonialsProps {
  inventory: Car[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ inventory }) => {
  const reviews = inventory.filter(car => car.client_review && car.client_review.length > 5).slice(0, 3);

  if (reviews.length === 0) return null;

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 style={{fontSize: '2rem', fontWeight: 'bold'}}>Happy Clients</h2>
        <p style={{color: '#888'}}>See what our community is saying</p>

        <div className="testimonial-grid">
          {reviews.map((car) => (
            <div key={car.id} className="testimonial-card">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p style={{fontStyle: 'italic', marginBottom: '1.5rem', color: '#555'}}>"{car.client_review}"</p>
              <div style={{display: 'flex', gap: '1rem', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '1rem'}}>
                <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#aaa'}}>
                    <i className="fas fa-user"></i>
                </div>
                <div>
                    <h5 style={{fontWeight: 'bold', fontSize: '0.9rem'}}>Verified Buyer</h5>
                    <p style={{fontSize: '0.8rem', color: '#999'}}>Purchased {car.year} {car.make} {car.model}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};