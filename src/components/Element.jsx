import React from 'react';
import Input from "./elements/Input";
import Select from "./elements/Select";

const Element = ({
  field: {
    id,
    type,
    name,
    label,
    placeholder,
    required,
    value,
    options,
    checked
  }
}) => {

  switch (type.toString().toLowerCase()) {
    case 'text':
    case 'date':
    case 'checkbox':
      return (<Input
          id={id}
          type={type}
          name={name}
          label={label}
          placeholder={placeholder}
          required={required}
          value={value}
          checked={checked}
      />)
    case 'string':
      return (<Input
          id={id}
          type="text"
          name={name}
          label={label}
          placeholder={placeholder}
          required={required}
          value={value}
      />)
    case 'boolean':
      return (<Input
          id={id}
          type="checkbox"
          name={name}
          label={label}
          placeholder={placeholder}
          required={required}
          value={value}
          checked={checked}
      />)
    case 'select':
      return (<Select
          id={id}
          type={type}
          name={name}
          label={label}
          placeholder={placeholder}
          required={required}
          value={value}
          options={options}/>)
    default:
      return null;
  }
};

export default Element;
