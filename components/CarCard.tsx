import React from 'react';
import { Car } from '../types';
import './CarCard.css';

interface CarCardProps {
  car: Car;
  onClick: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  return (
    <div className="car-card" onClick={() => onClick(car)}>
      <div className="card-image-wrapper">
        <img 
          src={car.main_image_url} 
          alt={`${car.make} ${car.model}`} 
          className="card-image"
        />
        <div className="card-badge">
          {car.year}
        </div>
      </div>
      
      <div className="card-content">
        <h4 className="card-title">{car.make} {car.model}</h4>
        <div className="card-footer">
            <span className="card-price">{car.price}</span>
            <span style={{fontSize: '0.9rem', color: '#666'}}>Details &rarr;</span>
        </div>
      </div>
    </div>
  );
};