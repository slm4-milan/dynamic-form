import React, {useEffect, useState} from 'react';
import Element from "./Element";
import formSchema from './../formSchema.json'
import {FormContext} from "../context/FormContext";
import {FormErrorsContext} from "../context/FormErrorsContext";

const Form = () => {
  const [elements, setElements] = useState(formSchema);
  const {fields, form_heading} = elements ? elements : {};
  const [schemaKeys, setSchemaKeys] = useState({})
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const newSchemaKeys = {...schemaKeys}
    fields.forEach(field => {
      newSchemaKeys[field.name] = [field.value, field.label]
    })
    setSchemaKeys(newSchemaKeys)
    console.log(newSchemaKeys)
  }, [elements])

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(schemaKeys)
    }
  }, [formErrors]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const validate = (values) => {
    const errors = {};
    for (const [key, value] of Object.entries(values)) {
      const [fieldValue, label] = value;
      if (!fieldValue) {
        if (typeof fieldValue !== "boolean") {
          errors[key] = `${capitalizeFirstLetter(label)} is required`
        }
      }
    }
    console.log(errors)
    return errors;
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
  }

  const handleSubmit = (event) => {
    console.log(formErrors)
    event.preventDefault();
    setFormErrors(validate(schemaKeys));
    setIsSubmit(true)
  }

  return (
      <FormErrorsContext.Provider value={{formErrors}}>
        <FormContext.Provider value={{handleChange}}>
          <form>
            <h2 className="my-4">{form_heading}</h2>
            {fields ?
                fields.map(field => <Element key={field.id}
                                             field={field}/>)
                : null}

            <div className="text-center">
              <button onClick={event => handleSubmit(event)} type="submit"
                      className="mb-3 btn">
                Submit
              </button>
            </div>
          </form>
        </FormContext.Provider>
      </FormErrorsContext.Provider>

  );
};

export default Form;
