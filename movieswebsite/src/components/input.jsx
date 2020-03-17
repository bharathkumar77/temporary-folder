import React from "react";
const Input = props => {
  const {
    inputName,
    value,
    type,
    handleInputField,
    label,
    error
  } = props;
  

  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <input
        value={value}
        type={type}
        className="form-control"
        id={inputName}
        name={inputName}
        onChange={handleInputField}
      />
      <p class="text-danger text-center pt-2 " style={{ fontWeight: "bold" }}>
        {error}
      </p>
    </div>
  );
};

export default Input;
