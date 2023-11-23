import React from "react";

const Button = ({ label, primary, secondary, color, bold }) => {
  return (
    <button
      className={` w-full ${
        color
          ? color + " hover:bg-opacity-75"
          : primary
          ? "bg-primary hover:bg-primaryHover"
          : secondary
          ? "bg-secondary hover:bg-secondaryHover"
          : "bg-gray"
      }  ${bold && "font-bold"} rounded-md px-6 py-2 text-[#fff] duration-300`}
    >
      {label}
    </button>
  );
};

export default Button;
