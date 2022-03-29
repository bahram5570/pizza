import React from 'react';

interface InputTypes {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  message: string;
  id: string;
  inputHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const FormStructure: React.FC<InputTypes> = ({
  label,
  type,
  name,
  placeholder,
  message,
  id,
  inputHandler,
}) => {
  return (
    <div className="login_form">
      <div className="flex justify-between">
        <p className="text-yellow-400">{message}</p>
        <label htmlFor={id}>{label}</label>
      </div>

      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={inputHandler}
      />
    </div>
  );
};

export default FormStructure;
