import React, { useEffect, useState } from "react";
import LandingPage from "../landing";
import { userInstance } from "../../axios/instance";
import { useAtom } from "jotai";
import { userData } from "../../atoms";
import { user_profile } from "../../assets";
import Button from "../../components/button";
import CircleAvatar from "../../components/circle_avatar";
import { FaChevronDown } from "react-icons/fa6";

const HomePage = () => {
  const [userInfo, setUserInfo] = useAtom(userData);

  console.log("userINfo at Home: ", userInfo);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
        setUserInfo(null);
      } else {
        const response = await userInstance.get("/", {
          headers: {
            "x-auth-token": token,
          },
        });
        console.log("checking the token response...", response);
        setUserInfo({
          token,
          user: {
            id: response.data.data.user_id,
            display_name: response.data.data.user_name,
          },
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <div className="min-h-screen pt-10 lg:pt-0 border-2 z-50 border-green-500">
      {!userInfo?.token ? (
        <LandingPage />
      ) : (
        <div className="max-w-6xl mx-auto ">
          <div className="pt-10 px-4 rounded-b-md sticky top-20 left-0 right-0 flex justify-between items-center bg-gray-300">
            <h1 className=" text-2xl font-medium">
              Welcome:{" "}
              <span className=" text-primary">
                {userInfo?.user?.display_name}
              </span>
            </h1>
            <div className=" my-4">
              <Button label={"Ask Question"} primary />
            </div>
          </div>

          <div className="mt-20">
            <h1 className=" text-2xl font-medium">
              Questions <span className=" text-xl text-secondary">78</span>
            </h1>
            <div className="mt-6">
              <div className="flex items-start gap-4 bg-gray-200 p-3 rounded-md cursor-pointer">
                <div className=" mt-1 shrink-0 max-w-min flex flex-col items-center gap-2">
                  <CircleAvatar imagePath={user_profile} size={46} />
                  <p className="">13</p>
                </div>
                <div className=" w-full  flex items-center justify-between">
                  <div className="">
                    <p className="mb-[2px] text-secondaryHover">
                      {userInfo?.user?.display_name}
                    </p>
                    <p className=" text-lg font-medium -my-2">
                      What is HTML in modern web development?
                    </p>
                    <p className="mt-[2px] text-gray-500">description</p>
                  </div>
                  <div className="mr-3">
                    <FaChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
