import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { FormErrorsContext } from "../../context/FormErrorsContext";

const Input = ({
  id,
  type,
  name,
  label,
  placeholder,
  value,
  required,
  checked,
}) => {
  const { handleChange } = useContext(FormContext);
  const { formErrors } = useContext(FormErrorsContext);

  function dangerClass() {
    return !!formErrors[name] ? "border-danger" : "";
  }

  return (
    <div
      className={`form-field mb-4 ${
        type === "checkbox" || type === "boolean" ? "form-check" : ""
      }`}
    >
      <label
        htmlFor={id}
        className={`prevent-select ${
          type === "checkbox" || type === "boolean"
            ? "form-check-label"
            : "form-label"
        }`}
      >
        {label}
      </label>
      <input
        onChange={(event) => handleChange(id, event)}
        value={value}
        name={name}
        type={type}
        className={
          type === "checkbox" || type === "boolean"
            ? `form-check-input ${dangerClass()}`
            : `form-control ${dangerClass()}`
        }
        id={id}
        placeholder={
          type === "checkbox" || type === "boolean" ? "" : placeholder
        }
        required={required}
        checked={checked}
      />
      {formErrors[name] ? (
        <span className="error-message text-danger">{formErrors[name]}</span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Input;
