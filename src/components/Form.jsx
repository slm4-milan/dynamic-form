import React, {useState, useEffect} from 'react';
import Element from "./Element";
import formSchema from './../formSchema.json'
import {FormContext} from "../context/FormContext";

const Form = () => {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formSchema)
  }, []);
  const {fields, form_heading} = elements ? elements : {};
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(elements)
  }

  const handleChange = (_id, event) => {
    const newElements = {...elements};

    newElements.fields.forEach(field => {
      const {type, id, value} = field;
      if (_id === id) {
        console.log(field, "value", value)
        switch (type) {
          case "checkbox":
          case "boolean":
            field['value'] = event.target.checked;
            break;
          default:
            field['value'] = event.target.value;

        }
      }
      setElements(newElements)
    })
    console.log(elements)
  }

  return (
      <FormContext.Provider value={{handleChange}}>
        <form>
          <h2>{form_heading}</h2>
          {fields ?
              fields.map(field => <Element key={field.id}
                                           field={field}/>)
              : null}

          <div className="text-center">
            <button onClick={event => handleSubmit(event)} type="submit"
                    className="mb-3 btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </FormContext.Provider>
  );
};

export default Form;
