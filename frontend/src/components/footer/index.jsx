import React from "react";
import { evangadi_logo_white } from "../../assets";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import FooterList from "../list/FooterList";
import { footer_data } from "../../../data";

const Footer = () => {
  return (
    <div className=" bg-darkBlue p-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-8 justify-between ">
        <div className=" flex flex-col gap-4 mt-1">
          <img
            className=" w-32"
            src={evangadi_logo_white}
            alt="evangadi logo"
          />
          <div className="flex text-white w-24 justify-between ml-3">
            <FaFacebookF className=" cursor-pointer hover:text-secondaryHover duration-300" />
            <FaInstagram className=" cursor-pointer hover:text-secondaryHover duration-300" />
            <FaYoutube className=" cursor-pointer hover:text-secondaryHover duration-300" />
          </div>
        </div>
        <FooterList head={"Useful Link"} lists={footer_data.usefull_link} />
        <FooterList head={"Contact Info"} lists={footer_data.contact} />
      </div>
      <div className="max-w-6xl mx-auto h-[2px] bg-secondaryHover  my-6" />
      <div className=" flex flex-col items-center justify-center text-gray-300 ">
        <p className="text-slate-300 text-center font-serif ">
          Project: Evangadi forum
        </p>
        <p className="text-sm text-slate-400">
          Designed & Developed by{" "}
          <a
            href="https://ellaportfolio.netlify.app/"
            rel="noreferrer"
            target="_blank"
            className=" text-secondary hover:text-[#fca547] duration-300"
          >
            Elyas Abebe
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
