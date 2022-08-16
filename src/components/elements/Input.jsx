import React from 'react';

const Input = ({id, type, label, placeholder, value, required}) => {
  console.log("input props", {id, type, label, placeholder, required})
  return (
      <div>
        <div className="mb-3">
          <label htmlFor={id} className="form-label">
            {label}
          </label>
          <input
              type={type}
              className="form-control"
              id={id}
              placeholder={placeholder ? placeholder : ''}
              value={value}
          />
        </div>
      </div>
  );
};

export default Input;
