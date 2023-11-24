import React, { useEffect } from "react";
import TextInput from "../input";
import Button from "../button";

const SignUp = ({ handleLogIn, handleRegister }) => {
  return (
    <div className=" w-[500px] max-w-full  bg-gray-50 rounded-lg px-7 pt-7 pb-10 shadow-xl duration-500">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold uppercase">Register</h1>
        <h1 className=" text-darkBlue">Join evangadi network</h1>
      </div>
      <form className="">
        <div className="grid gap-5">
          <TextInput
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            onChange={null}
          />
          <div className="flex gap-2">
            <TextInput
              type={"email"}
              name={"email"}
              placeholder={"First name"}
              onChange={null}
            />
            <TextInput
              type={"email"}
              name={"email"}
              placeholder={"Last name"}
              onChange={null}
            />
          </div>
          <TextInput
            type={"email"}
            name={"email"}
            placeholder={"User name"}
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
        <div className="h-1 w-full bg-green-500 mt-2 duration-500" />
        <p className=" text-right p-1 text-sm text-green-500 cursor-pointer">
          strong password
        </p>
        <div className=" mt-6 mb-4">
          <Button
            label={"SUBMIT"}
            color={"bg-[#6172c4]"}
            bold
            shadow
            onClick={handleRegister}
          />
          <div className="text-center my-2 flex justify-center items-center px-2">
            <div className=" w-full h-[2px] bg-gray-300" />
            <p className=" mx-3 mb-1">or</p>
            <div className=" w-full h-[2px] bg-gray-300" />
          </div>
        </div>
      </form>
      <Button label={"SIGN IN"} color={"bg-[#f6a54e]"} onClick={handleLogIn} />
      {/* <p className=" text-center text-sm">
        Don&apos;t have an account?{" "}
        <span className="text-secondary text-base font-medium hover:text-secondaryHover duration-300 cursor-pointer">
          Create an account
        </span>
      </p> */}
    </div>
  );
};

export default SignUp;
