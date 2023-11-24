import React from "react";

const Button = ({
  label,
  primary,
  secondary,
  onClick,
  color,
  bold,
  shadow,
}) => {
  return (
    <button
      className={` w-full ${
        color
          ? color + " hover:bg-opacity-80"
          : primary
          ? "bg-primary hover:bg-primaryHover"
          : secondary
          ? "bg-secondary hover:bg-secondaryHover"
          : "bg-gray"
      }  ${bold && "font-bold"} ${
        shadow && " shadow-md"
      } rounded-md px-6 py-2 text-[#fff] duration-300`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
