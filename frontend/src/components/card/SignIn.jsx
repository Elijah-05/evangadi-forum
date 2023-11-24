import React, { useEffect } from "react";
import Button from "../button";
import TextInput from "../input";

const SignIn = ({ handleLogin, handleRegister }) => {
  return (
    <div className=" w-[500px] max-w-full  bg-gray-50 rounded-lg px-7 pt-7 pb-10 shadow-xl duration-500">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold uppercase">Sign In</h1>
        <h1 className="">Login to your account</h1>
      </div>
      <form className="">
        <div className="grid gap-5">
          <TextInput
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            onChange={null}
          />
          <TextInput
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            password
            onChange={null}
          />
        </div>
        <p className=" text-right p-1 text-sm text-secondaryHover cursor-pointer">
          forgot password?
        </p>
        <div className=" mt-6 mb-4">
          <Button label={"LOG IN"} secondary bold shadow />
          <div className="text-center my-2 flex justify-center items-center px-2">
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
      {/* <p className=" text-center text-sm">
        Don&apos;t have an account?{" "}
        <span className="text-secondary text-base font-medium hover:text-secondaryHover duration-300 cursor-pointer">
          Create an account
        </span>
      </p> */}
    </div>
  );
};

export default SignIn;
