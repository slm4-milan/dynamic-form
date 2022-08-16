import React from 'react';

const Select = ({id, type, label, placeholder, value, options, required}) => {
  console.log("options", options)
  return (
      <div className="mb-3">
        <label className="form-label prevent-select">
          {label}
        </label>
        <select className="form-select">
          {options.length > 0 && options.map(
              (option, index) => <option value={option.value}
                                         key={index}>{option.value}</option>)}
        </select>
      </div>
  );
};

export default Select;
