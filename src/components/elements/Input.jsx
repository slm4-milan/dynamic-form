import React from 'react';

const Input = ({id, type, label, placeholder, value, required}) => {
  console.log("input props", {id, type, label, placeholder, required})
  console.log(value, "value")
  return (

      <div className={`mb-3 ${type === 'checkbox' ? "form-check" : ""}`}>
        <label htmlFor={id}
               className={`prevent-select ${type === 'checkbox'
                   ? "form-check-label"
                   : "form-label"}`}>
          {label}
        </label>
        <input
            type={type}
            className={type === 'checkbox' ? "form-check-input"
                : "form-control"}
            id={id}
            placeholder={type === 'checkbox' ? '' : placeholder}
        />
      </div>
  );
};

export default Input;
