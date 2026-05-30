// src/components/Toolbar/Toolbar.jsx
import React from 'react';
import './Toolbar.css';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      <div className="toolbar-buttons">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`toolbar-btn ${selected === filter ? 'active' : ''}`}
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;