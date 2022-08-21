import React, {useContext} from 'react';
import {FormContext} from "../../context/FormContext";
import {FormErrorsContext} from "../../context/FormErrorsContext";

const Select = ({
  id,
  type,
  name,
  label,
  placeholder,
  value,
  options,
  required
}) => {
  const {handleChange} = useContext(FormContext);
  const {formErrors} = useContext(FormErrorsContext)
  return (
      <div className="form-field mb-4">
        <label className="form-label prevent-select">
          {label}
        </label>
        <select name={name} className="form-select"
                onChange={event => handleChange(id, event)}>
          {options.length > 0 && options.map(
              (option, index) => <option value={option.value}
                                         key={index}>{option.value}</option>)}
        </select>
        {formErrors[name] ? <span
                className="error-message text-danger">{formErrors[name]}</span>
            : <span></span>}

      </div>
  );
};

export default Select;
