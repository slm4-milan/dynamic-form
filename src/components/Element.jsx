import React from 'react';
import Input from "./elements/Input";
import Select from "./elements/Select";

const Element = ({field: {id, type, label, placeholder, required, value}}) => {
  console.log("field type", type)
  switch (type) {
    case 'text':
    case 'date':
      return (<Input
          id={id}
          type={type}
          label={label}
          placeholder={placeholder}
          required={required}
          value={value}
      />)
    case 'select':
      return (<Select/>)
    default:
      return null;
  }
};

export default Element;
