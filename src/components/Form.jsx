import React, { useEffect, useState } from "react";
import Element from "./Element";
import { FormContext } from "../context/FormContext";
import { FormErrorsContext } from "../context/FormErrorsContext";
import axios from "axios";

const Form = () => {
  const [elements, setElements] = useState(null);
  const { fields, form_heading } = elements ? elements : {};
  const [schemaKeys, setSchemaKeys] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const fetchSchema = async () => {
    try {
      const result = await axios("http://localhost:5000/form", {
        params: { form_heading: "Population Census" },
      });
      setElements(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const sendFormData = async (formData) => {
    try {
      const data = await axios({
        method: "post",
        url: "http://localhost:5000/form-data",
        data: { ...formData },
      });
      console.log(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSchema();
  }, []);

  useEffect(() => {
    if (elements) {
      const newSchemaKeys = { ...schemaKeys };

      fields.forEach((field) => {
        newSchemaKeys[field.name] = [field.value, field.label];
      });
      setSchemaKeys(newSchemaKeys);
      console.log(newSchemaKeys);
    }
  }, [elements]);

  const createFormFieldsData = () => {
    const formFieldsData = { ...schemaKeys };

    fields.forEach((field) => {
      formFieldsData[field.name] = field.value;
    });
    return formFieldsData;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const formFieldsData = createFormFieldsData();

      sendFormData(formFieldsData);
    }
  }, [formErrors]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const validate = (values) => {
    const errors = {};
    for (const [key, value] of Object.entries(values)) {
      const [fieldValue, label] = value;
      if (!fieldValue) {
        if (typeof fieldValue !== "boolean") {
          errors[key] = `${capitalizeFirstLetter(label)} is required`;
        }
      }
    }
    console.log(errors);
    return errors;
  };

  const handleChange = (_id, event) => {
    const newElements = { ...elements };

    newElements.fields.forEach((field) => {
      const { type, id, value } = field;
      if (_id === id) {
        console.log(field, "value", value);
        switch (type) {
          case "checkbox":
          case "boolean":
            field["value"] = event.target.checked;
            break;
          default:
            field["value"] = event.target.value;
        }
      }
      setElements(newElements);
    });
  };

  const handleSubmit = (event) => {
    console.log(formErrors);
    event.preventDefault();
    setFormErrors(validate(schemaKeys));
    setIsSubmit(true);
  };

  return (
    <FormErrorsContext.Provider value={{ formErrors }}>
      <FormContext.Provider value={{ handleChange }}>
        <form>
          <h2 className="my-4">{form_heading}</h2>
          {fields
            ? // citas iz baze
              fields.map((field) => <Element key={field.id} field={field} />)
            : null}

          <div className="text-center">
            <button
              onClick={(event) => handleSubmit(event)}
              type="submit"
              className="mb-3 btn"
            >
              Submit
            </button>
          </div>
        </form>
      </FormContext.Provider>
    </FormErrorsContext.Provider>
  );
};

export default Form;
