import React from "react";
import { FaChevronUp } from "react-icons/fa6";

const ScrollUpButton = ({ showScrollBtn }) => {
  return (
    <div
      className={`${
        showScrollBtn ? "opacity-1" : "opacity-0"
      } fixed group border-2 border-yellow-500 bottom-10 z-50 right-6 xl:right-28 items-center justify-center rounded-full drop-shadow-[0px_5px__8px_rgba(0,0,0,0.25)] duration-1000`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <div className="w-11 h-11 absolute animate-pulse scale-150 opacity-20 group-hover:opacity-50 duration-500 rounded-full flex justify-center items-center  bg-yellow-400" />
      <div className="w-11 h-11 absolute group-hover:scale-[1.8] opacity-0 group-hover:opacity-50 duration-500 rounded-full flex justify-center items-center  bg-yellow-200" />
      <div className=" scale-100 border-2  bg-slate-800 group- hover:bg- yellow-400 duration-300 w-11 h-11 rounded-full flex items-center justify-center">
        <div className=" group-hover:-translate-y-1 duration-500 ">
          <FaChevronUp className="text-white group-hover:scale-125" />
        </div>
      </div>
    </div>
  );
};

export default ScrollUpButton;
