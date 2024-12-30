import React from 'react';

const Dropdown = ({ label, options, onSelect }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select onChange={onSelect}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;