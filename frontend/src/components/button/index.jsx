import React from "react";

const Button = ({ label, primary, secondary }) => {
  return (
    <button
      className={`${
        primary
          ? "bg-primary hover:bg-primaryHover"
          : secondary
          ? "bg-secondary hover:bg-secondaryHover"
          : "bg-gray"
      } rounded-md px-10 py-2 text-[#fff] duration-300`}
    >
      {label}
    </button>
  );
};

export default Button;
