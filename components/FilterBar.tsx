import React from 'react';
import './FilterBar.css';

interface FilterBarProps {
  models: string[];
  years: number[];
  selectedModel: string;
  selectedYear: string;
  onModelChange: (model: string) => void;
  onYearChange: (year: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  models,
  years,
  selectedModel,
  selectedYear,
  onModelChange,
  onYearChange
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-label">
        <h3 className="filter-title">Find your car</h3>
      </div>
      
      <div className="filter-controls">
        <select 
          value={selectedModel}
          onChange={(e) => onModelChange(e.target.value)}
          className="filter-select"
        >
          <option value="">All Models</option>
          {models.map(m => <option key={m} value={m}>{m}</option>)}
        </select>

        <select 
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
          className="filter-select"
        >
          <option value="">All Years</option>
          {years.sort((a,b) => b - a).map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        
        <button 
            onClick={() => {onModelChange(''); onYearChange('');}}
            className="btn-reset"
        >
            Reset
        </button>
      </div>
    </div>
  );
};