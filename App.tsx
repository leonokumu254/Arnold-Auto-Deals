import React, { useEffect, useState, useMemo } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { BrandShowcase } from './components/BrandShowcase';
import { CarCard } from './components/CarCard';
import { CarModal } from './components/CarModal';
import { About } from './components/About';
import { Partners } from './components/Partners';
import { Location } from './components/Location';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { fetchInventory } from './services/sheetService';
import { Car } from './types';

function App() {
  const [inventory, setInventory] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  // Filter States
  const [modelFilter, setModelFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  // Initial Data Fetch
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchInventory();
        setInventory(data);
      } catch (err) {
        console.error("Failed to load inventory", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Derived Data for Filters
  const uniqueModels = useMemo(() => 
    Array.from(new Set(inventory.map(c => c.model))).sort(), 
  [inventory]);

  const uniqueYears = useMemo(() => 
    Array.from(new Set(inventory.map(c => c.year))), 
  [inventory]);

  // Filter Logic
  const filteredInventory = inventory.filter(car => {
    const matchesModel = modelFilter ? car.model === modelFilter : true;
    const matchesYear = yearFilter ? car.year.toString() === yearFilter : true;
    return matchesModel && matchesYear;
  });

  // Categorize for Display
  const locallyUsed = filteredInventory.filter(c => c.category === 'Locally Used');
  const freshlyImported = filteredInventory.filter(c => c.category === 'Freshly Imported');
  const sourcedOnRequest = filteredInventory.filter(c => c.category === 'Sourced on Request');

  // Helper component for sections
  const CarSection = ({ title, cars }: { title: string, cars: Car[] }) => {
    if (cars.length === 0) return null;
    return (
      <div className="inventory-section">
        <div className="section-header">
            <h3 className="section-title">{title}</h3>
            <div className="section-line"></div>
        </div>
        <div className="car-grid">
          {cars.map(car => (
            <CarCard key={car.id} car={car} onClick={setSelectedCar} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      
      <main className="container" id="inventory">
        <FilterBar 
          models={uniqueModels}
          years={uniqueYears}
          selectedModel={modelFilter}
          selectedYear={yearFilter}
          onModelChange={setModelFilter}
          onYearChange={setYearFilter}
        />

        {loading ? (
          <div style={{textAlign: 'center', padding: '4rem'}}>
            <i className="fas fa-spinner fa-spin fa-2x" style={{color: 'var(--primary-red)'}}></i>
            <p style={{marginTop: '1rem'}}>Loading Inventory...</p>
          </div>
        ) : (
          <div style={{marginTop: '2rem'}}>
             {filteredInventory.length === 0 && (
                 <div style={{textAlign: 'center', padding: '4rem', color: '#666'}}>
                     No vehicles found matching your criteria.
                 </div>
             )}
             <CarSection title="Freshly Imported" cars={freshlyImported} />
             <CarSection title="Locally Used" cars={locallyUsed} />
             <CarSection title="Sourced on Request" cars={sourcedOnRequest} />
          </div>
        )}
      </main>

      <BrandShowcase />
      <About />
      <Partners />
      <Location />
      <Testimonials inventory={inventory} />
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Arnold Auto Deals. All rights reserved.</p>
      </footer>

      {/* Modal Overlay */}
      {selectedCar && (
        <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
}

export default App;