import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const TextInput = ({ type, name, placeholder, onChange, password }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <input
        className=" border-2 outline-[rgba(241,151,72,0.5)] block p-2 w-full rounded-md"
        type={password && showPassword ? "text" : type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {password && (
        <div
          className=" absolute text-lg right-2 bottom-0 -translate-y-2 p-1 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? (
            <FaRegEye className=" text-lg" />
          ) : (
            <FaRegEyeSlash className=" text-lg" />
          )}
        </div>
      )}
    </div>
  );
};

export default TextInput;
