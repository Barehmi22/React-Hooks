
import React from 'react';

const Filter = ({ filterTitle, filterRate, onTitleChange, onRateChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRate}
        onChange={(e) => onRateChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
