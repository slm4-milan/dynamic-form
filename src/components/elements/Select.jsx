import React, {useContext} from 'react';
import {FormContext} from "../../context/FormContext";

const Select = ({id, type, label, placeholder, value, options, required}) => {
  const {handleChange} = useContext(FormContext);
  return (
      <div className="mb-3">
        <label className="form-label prevent-select">
          {label}
        </label>
        <select className="form-select"
                onChange={event => handleChange(id, event)}>
          {options.length > 0 && options.map(
              (option, index) => <option value={option.value}
                                         key={index}>{option.value}</option>)}
        </select>
      </div>
  );
};

export default Select;
