import React, {useContext} from 'react';
import {FormContext} from "../../context/FormContext";

const Input = ({id, type, label, placeholder, value, required, checked}) => {
  const {handleChange} = useContext(FormContext);
  return (
      <div className={`mb-3 ${type === 'checkbox' ? "form-check" : ""}`}>
        <label htmlFor={id}
               className={`prevent-select ${type === 'checkbox'
                   ? "form-check-label"
                   : "form-label"}`}>
          {label}
        </label>
        <input
            onChange={event => handleChange(id, event)}
            value={value}
            type={type}
            className={type === 'checkbox' ? "form-check-input"
                : "form-control"}
            id={id}
            placeholder={type === 'checkbox' ? '' : placeholder}
            required={required}
            checked={checked}
        />
      </div>
  );
};

export default Input;
