import React, { useState } from "react";
import { evangadi_logo } from "../../assets";
import Button from "../button";
import { IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { logAnimation, logState, userData } from "../../atoms";

const NavBar = () => {
  const [signState, setSignState] = useAtom(logState);
  const [onAnimation, setOnAnimation] = useAtom(logAnimation);
  const [menuClassName, setMenuClassName] = useState("");
  const [userInfo, setUserInfo] = useAtom(userData);
  const navigate = useNavigate();

  function toggleMenuClassName() {
    menuClassName ? setMenuClassName("") : setMenuClassName("toggle-menu");
  }

  function handleMenuClicks() {
    if (menuClassName == "toggle-menu") {
      setMenuClassName("");
    }
  }

  function handleLogOutLogIn(e) {
    e.preventDefault();
    if (userInfo?.user?.display_name) {
      localStorage.setItem("auth-token", "");
      setUserInfo(null);
      navigate("/");
      setSignState("log_in");
    } else {
      navigate("/");
      signState == "log_in" ? setSignState("sign_up") : setSignState("log_in");
    }

    setOnAnimation(true);
    setTimeout(() => {
      setOnAnimation(false); //Animation end after 700ms
    }, 700);
  }

  return (
    <nav className=" h-20 backdrop-blur-sm bg-white bg-opacity-70 shadow-sm px-2">
      <div className="max-w-6xl w-full mx-auto h-full flex items-center justify-between">
        <div className="p-2 w-40 hover:scale-[1.03] opacity-75 hover:opacity-100 cursor-pointer duration-300">
          <Link to={"/"}>
            <img
              className=" w-full object-contain"
              src={evangadi_logo}
              alt=""
            />
          </Link>
        </div>
        <div
          className={`${
            menuClassName !== "toggle-menu" && "hidden"
          } sm:flex items-center mobile `}
        >
          <ul
            className={` items-center  gap-3 mobile ${
              menuClassName == "toggle-menu"
                ? "menu-open translate-x-0"
                : " flex  text-darkBlue translate-x-56 sm:translate-x-0"
            } duration-500`}
          >
            <li
              className=" font-medium hover:text-secondary duration-300"
              onClick={handleMenuClicks}
            >
              Home
            </li>
            <li
              className={` ${
                menuClassName == "toggle-menu" && "my-2"
              } font-medium hover:text-secondary duration-300`}
              onClick={handleMenuClicks}
            >
              How it Works
            </li>
            <a href="">
              <Button
                label={
                  userInfo
                    ? "Log out"
                    : signState == "log_in"
                    ? "Register"
                    : "Sign In"
                }
                primary={!userInfo && signState == "log_in"}
                secondary={!userInfo && signState !== "sign_up" ? false : true}
                onClick={(e) => {
                  handleLogOutLogIn(e);
                  if (menuClassName === "toggle-menu") {
                    setMenuClassName("");
                  }
                }}
              />
            </a>
          </ul>
        </div>
        <div
          className={`relative ${menuClassName} sm:hidden cursor-pointer mr-1 origin-center  z-50`}
          onClick={toggleMenuClassName}
        >
          {/* <IoMenu className=" text-4xl text-gray-800" /> */}
          <div
            className={`h-1 w-8 rounded-sm bg-slate-800 after:content-[""] after:w-8 after:h-1 after:bg-slate-800 after:-translate-y-2 after:absolute after:rounded-sm after:duration-500 before:content-[""] before:w-8 before:h-1 before:bg-slate-800 before:translate-y-2 before:absolute before:rounded-sm before:duration-500 duration-500`}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
