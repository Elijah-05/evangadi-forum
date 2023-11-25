import React from "react";

const CircleAvatar = ({ imagePath, alt, size = 11 }) => {
  return (
    <div
      className={`overflow-hidden rounded-full ring-[3px] ring-darkBlue`}
      style={{ height: size, width: size }}
    >
      <img className=" object-cover w-full h-full" src={imagePath} alt={alt} />
    </div>
  );
};

export default CircleAvatar;
