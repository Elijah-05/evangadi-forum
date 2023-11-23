import React from "react";

const TextInput = ({ type, name, placeholder, onChange }) => {
  return (
    <input
      className=" border-2 outline-[rgba(241,151,72,0.5)] block p-2 w-full rounded-md"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextInput;
