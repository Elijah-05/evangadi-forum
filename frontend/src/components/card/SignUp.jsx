import React, { useEffect, useState } from "react";
import TextInput from "../input";
import Button from "../button";
import { userInstance } from "../../axios/instance";

const SignUp = ({ signState, onAnimation, handleLogIn, handleRegister }) => {
  const [passwordInfo, setPasswordInfo] = useState({
    message: "",
    color: "",
    width: 0,
  });
  const [newUser, setNewUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [registerErrorResponse, setRegisterErrorResponse] = useState("");

  const newUserInitial = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  useEffect(() => {
    if (newUser.password.length == 0) {
      setPasswordInfo({
        message: "",
        strength: "",
      });
    }
    if (newUser.password.length > 0 && newUser.password.length < 8) {
      setPasswordInfo({
        message: "password must be at least 8 characters",
        strength: "low",
      });
    }
    if (newUser.password.length > 7) {
      const char = /[\W+|\d+]/;
      const noChar = /[^\W]/;
      const strong =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

      if (noChar.test(newUser.password)) {
        setPasswordInfo({
          message: "password must be at least 8 characters",
          strength: "poor",
        });
      }
      if (char.test(newUser.password)) {
        setPasswordInfo({
          message: "Medium Strength",
          strength: "medium",
        });
      }
      if (strong.test(newUser.password)) {
        setPasswordInfo({
          message: "Strong Password",
          strength: "strong",
        });
      }
    }
  }, [newUser.password]);

  console.log("newUserData: ", newUser);

  function handleChangePassword(e) {
    setNewUser((prev) => ({ ...prev, password: e.target.value }));
  }

  async function handleCreateAccount(e) {
    e.preventDefault();
    userInstance
      .post("/", newUser)
      .then((data) => {
        console.log("Response: ", data);
        setNewUser(newUserInitial);
      })
      .catch((err) => {
        console.log("error while posting: ", err.response.data.msg);
        setRegisterErrorResponse(err.response.data.msg);
      });
    console.log("Account Created!");
  }

  return (
    <div
      className={`${
        signState == "sign_up"
          ? "z-0 duration-700 scale-[1.02]"
          : onAnimation
          ? " -translate-y-[650px] absolute opacity-50 duration-700 "
          : "translate-y-56 absolute opacity-0 -z-10 duration-[1200ms]"
      } w-full sm:w-[480px] max-w-full  bg-gray-50 rounded-lg px-7 pt-7 pb-10 shadow-xl  `}
    >
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold uppercase">Register</h1>
        <h1 className=" text-darkBlue">Join evangadi network</h1>
      </div>
      <form className=" w-full">
        <div className="grid gap-4">
          <TextInput
            type={"email"}
            name={"email"}
            value={newUser.email}
            placeholder={"Email"}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <div className="flex w-full justify-between  gap-2">
            <TextInput
              type={"text"}
              name={"first-name"}
              value={newUser.firstName}
              placeholder={"First name"}
              onChange={(e) =>
                setNewUser({ ...newUser, firstName: e.target.value })
              }
            />
            <TextInput
              type={"text"}
              name={"last-name"}
              value={newUser.lastName}
              placeholder={"Last name"}
              onChange={(e) =>
                setNewUser({ ...newUser, lastName: e.target.value })
              }
            />
          </div>
          <TextInput
            type={"text"}
            name={"user-name"}
            value={newUser.userName}
            placeholder={"User name"}
            onChange={(e) =>
              setNewUser({ ...newUser, userName: e.target.value })
            }
          />
          <TextInput
            type={"password"}
            name={"password"}
            value={newUser.password}
            placeholder={"Password"}
            password
            onChange={handleChangePassword}
          />
        </div>
        <div
          className={` h-1 ${
            passwordInfo.strength == "low"
              ? "w-6 bg-red-500"
              : passwordInfo.strength == "poor"
              ? " w-28 bg-orange-400"
              : passwordInfo.strength == "medium"
              ? "w-1/2 bg-yellow-400"
              : passwordInfo.strength == "strong"
              ? " w-full bg-green-500"
              : " w-0"
          }  mt-2 duration-500`}
        />
        <p
          className={`text-right p-1 text-sm ${
            passwordInfo.strength == "low"
              ? " text-red-500"
              : passwordInfo.strength == "poor"
              ? "  text-orange-400"
              : passwordInfo.strength == "medium"
              ? " text-yellow-400"
              : passwordInfo.strength == "strong"
              ? "  text-green-700"
              : ""
          } cursor-pointer`}
        >
          {passwordInfo.message}
        </p>
        <p className=" text-center text-red-500 text-base">
          {registerErrorResponse}
        </p>
        <div className=" mt-3 mb-4">
          <Button
            label={"SUBMIT"}
            color={"bg-[#6172c4]"}
            bold
            shadow
            onClick={handleCreateAccount}
          />
          <div className="text-center my-2 flex justify-center items-center px-2">
            <div className=" w-full h-[2px] bg-gray-300" />
            <p className=" mx-3 mb-1">or</p>
            <div className=" w-full h-[2px] bg-gray-300" />
          </div>
        </div>
      </form>
      <Button label={"SIGN IN"} color={"bg-[#f6a54e]"} onClick={handleLogIn} />
    </div>
  );
};

export default SignUp;
