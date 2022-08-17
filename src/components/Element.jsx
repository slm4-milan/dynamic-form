import React from 'react';
import Input from "./elements/Input";
import Select from "./elements/Select";

const Element = ({
  field: {
    id,
    type,
    label,
    placeholder,
    required,
    value,
    options
  }
}) => {
  console.log("field type", type)
  switch (type.toString().toLowerCase()) {
    case 'text':
    case 'date':
    case 'checkbox':
      return (<Input
          id={id}
          type={type}
          label={label}
          placeholder={placeholder}
          required={required}
          value={value}
      />)
    case 'string':
      return (<Input
          id={id}
          type="text"
          label={label}
          placeholder={placeholder}
          required={required}
          value={value}
      />)
    case 'boolean':
      return (<Input
          id={id}
          type="checkbox"
          label={label}
          placeholder={placeholder}
          required={required}
          value={value}
      />)
    case 'select':
      return (<Select
          id={id}
          type={type}
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
