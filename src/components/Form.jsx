import React, {useState, useEffect} from 'react';
import Element from "./Element";
import formSchema from './../formSchema.json'

const Form = () => {
  console.log("form schema", formSchema);
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formSchema)
  }, []);
  const {fields, form_heading} = elements ? elements : {};
  console.log("fields", fields)
  console.log("form heading", form_heading)
  return (
      <>
        <h2 className="text-center">{form_heading}</h2>
        <form>
          {fields ?
              fields.map(field => <Element key={field.id}
                                           field={field}/>)
              : null}

          <button type="submit"
                  className="btn btn-primary align-self-auto">
            Submit
          </button>
        </form>
      </>
  );
};

export default Form;
