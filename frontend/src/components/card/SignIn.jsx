import React, { useEffect, useState } from "react";
import Button from "../button";
import TextInput from "../input";
import { userInstance } from "../../axios/instance";

const SignIn = ({ signState, onAnimation, handleLogin, handleRegister }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  console.log("userCred: ", userCredentials);

  function handleChangeInput(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function handleLogIn(e) {
    e.preventDefault();
    userInstance
      .post("/login", userCredentials)
      .then((data) => {
        console.log("response: ", data);
      })
      .catch((err) => {
        console.log("Unable to log : ", err.response.data);
      });
    console.log("sucessfully loged in!");
  }

  return (
    <div
      className={`${
        signState == "log_in"
          ? " z-0 duration-1000 scale-[1.03]"
          : onAnimation
          ? " -translate-y-[550px] absolute opacity-50   duration-700"
          : "translate-y-96 absolute opacity-0 -z-10 duration-[1200ms]"
      } w-full sm:w-[480px] min-h-[500px] max-w-full  bg-gray-50 rounded-lg px-7 pt-7 pb-10 shadow-xl `}
    >
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold uppercase">Sign In</h1>
        <h1 className="">Login to your account</h1>
      </div>

      <form className=" w-full">
        <div className="grid gap-5">
          <TextInput
            type={"email"}
            name={"email"}
            value={userCredentials.email}
            placeholder={"Email"}
            onChange={handleChangeInput}
          />
          <TextInput
            type={"password"}
            name={"password"}
            value={userCredentials.password}
            placeholder={"Password"}
            password
            onChange={handleChangeInput}
          />
        </div>
        <p className=" text-right p-1 text-sm text-secondaryHover cursor-pointer">
          forgot password?
        </p>
        <div className=" w-full mt-8 mb-4">
          <Button
            label={"LOG IN"}
            secondary
            bold
            shadow
            onClick={handleLogIn}
          />
          <div className="  text-center my-2 flex justify-center items-center px-2">
            <div className=" w-full h-[2px] bg-gray-300" />
            <p className=" mx-3 mb-1">or</p>
            <div className=" w-full h-[2px] bg-gray-300" />
          </div>
        </div>
      </form>
      <Button
        label={"REGISTER"}
        color={"bg-[#96a1d8]"}
        onClick={handleRegister}
      />
    </div>
  );
};

export default SignIn;
