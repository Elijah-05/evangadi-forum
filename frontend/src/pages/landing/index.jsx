import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import Aos from "aos";
import SignIn from "../../components/card/SignIn";
import SignUp from "../../components/card/SignUp";
import Description from "../../components/card/Description";
import TextInput from "../../components/input";

const LandingPage = () => {
  const [signState, setSignState] = useState("log_in");
  const [onAnimation, setOnAnimation] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 650, once: true });
  }, []);

  function handleToggleSign(sign) {
    setSignState(sign);
    setOnAnimation(true);
    setTimeout(() => {
      console.log("Animation End!");
      setOnAnimation(false);
    }, 700);
  }

  return (
    <div className=" landing-screen-height flex flex-col lg:flex-row justify-center items-center py-10 gap-6 ">
      <div data-aos="fade-up" className=" flex flex-col items-center">
        {/* <div
          // data-aos="fade-up"
          className={`${signState == "log_in" ? "flex z-10" : " hidden"}`}
        >
          <SignIn handleRegister={() => setSignState("sign_up")} />
        </div> */}
        <div
          className={`${
            signState == "log_in"
              ? " z-0 duration-1000 scale-[1.03]"
              : onAnimation
              ? " -translate-y-[450px] absolute opacity-50   duration-500"
              : "translate-y-96 absolute opacity-25 -z-10 duration-1000"
          } w-[500px] max-w-full  bg-gray-50 rounded-lg px-7 pt-7 pb-10 shadow-xl `}
        >
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
            onClick={() => handleToggleSign("sign_up")}
          />
          {/* <p className=" text-center text-sm">
        Don&apos;t have an account?{" "}
        <span className="text-secondary text-base font-medium hover:text-secondaryHover duration-300 cursor-pointer">
          Create an account
        </span>
      </p> */}
        </div>

        {/* <div
          data-aos="fade-up"
          className={`${signState == "sign_up" ? "flex" : " flex opacity-0"}`}
        >
          <SignUp handleLogIn={() => setSignState("log_in")} />
        </div> */}
        <div
          className={`${
            signState == "sign_up"
              ? "z-0 duration-700 scale-[1.02]"
              : onAnimation
              ? " -translate-y-[650px] absolute opacity-50 duration-700"
              : "translate-y-56 absolute opacity-25 -z-10 duration-[1200ms]"
          } w-[500px] max-w-full  bg-gray-50 rounded-lg px-7 pt-7 pb-10 shadow-xl  `}
        >
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
                onClick={() => setSignState("sign_up")}
              />
              <div className="text-center my-2 flex justify-center items-center px-2">
                <div className=" w-full h-[2px] bg-gray-300" />
                <p className=" mx-3 mb-1">or</p>
                <div className=" w-full h-[2px] bg-gray-300" />
              </div>
            </div>
          </form>
          <Button
            label={"SIGN IN"}
            color={"bg-[#f6a54e]"}
            onClick={() => handleToggleSign("log_in")}
          />

          {/* <p className=" text-center text-sm">
        Don&apos;t have an account?{" "}
        <span className="text-secondary text-base font-medium hover:text-secondaryHover duration-300 cursor-pointer">
          Create an account
        </span>
      </p> */}
        </div>
      </div>

      <Description />
    </div>
  );
};

export default LandingPage;
