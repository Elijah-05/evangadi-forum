import React, { useEffect, useState } from "react";
import LandingPage from "../landing";
import { userInstance } from "../../axios/instance";
import { useAtom } from "jotai";
import { userData } from "../../atoms";
import { user_profile } from "../../assets";

const HomePage = () => {
  const [userInfo, setUserInfo] = useAtom(userData);

  console.log("userINfo at Home: ", userInfo);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
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
    <div className=" h-screen pt-10 stroke">
      {!userInfo?.token ? (
        <LandingPage />
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className=" text-2xl font-medium ">
              Welcome: {userInfo?.user?.display_name}
            </h1>
          </div>
          <div className="">
            <h1 className="">Questions</h1>
            <div className="">
              <div className="">
                <div className=" overflow-hidden w-10 h-10 rounded-full ring-[3px] ring-darkBlue">
                  <img
                    className=" object-cover w-full h-full"
                    src={user_profile}
                    alt=""
                  />
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
