import React from "react";
import { evangadi_logo } from "../../assets";
import Button from "../button";
import { IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { logAnimation, logState, userData } from "../../atoms";

const NavBar = () => {
  const [signState, setSignState] = useAtom(logState);
  const [onAnimation, setOnAnimation] = useAtom(logAnimation);
  const [userInfo, setUserInfo] = useAtom(userData);
  const navigate = useNavigate();

  function handleLogOutLogIn(e) {
    e.preventDefault();
    if (userInfo) {
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
    <nav className=" h-20 backdrop-blur-sm bg-white bg-opacity-50 shadow-sm px-2">
      <div className="max-w-6xl h-20 mx-auto py-3 flex items-center justify-between">
        <div className="">
          <Link to={"/"}>
            <img
              className="w-40 hover:scale-105 cursor-pointer duration-300"
              src={evangadi_logo}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden sm:flex items-center ">
          <ul className="flex items-center gap-3">
            <li className=" font-medium hover:text-secondary duration-300">
              <a href="">Home</a>
            </li>
            <li className=" font-medium hover:text-secondary duration-300">
              <a href="">How it Works</a>
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
                onClick={handleLogOutLogIn}
              />
            </a>
          </ul>
        </div>
        <div className="block sm:hidden">
          <IoMenu className=" text-4xl text-gray-800" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
