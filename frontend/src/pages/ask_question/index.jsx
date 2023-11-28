import { useAtom } from "jotai";
import React, { useState } from "react";
import { questions, userData } from "../../atoms";
import BuletList from "../../components/list/BuletList";
import Button from "../../components/button";
import { questionInstance } from "../../axios/instance";

const AskQuestion = () => {
  const [userInfo] = useAtom(userData);
  const [getQuestions, setQuestions] = useAtom(questions);
  const [question, setQuestion] = useState({
    questionTitle: "",
    questionDescription: "",
  });
  const [error, setError] = useState();

  console.log("User Info: ", userInfo);
  console.log("Question: ", question);
  console.log("GetQuestions +++; ", getQuestions);

  function handleOnChange(e) {
    console.log("handleCahgne on elelmdnt: ", e.target);
    setQuestion({ ...question, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  }

  function validation() {
    const newError = {};
    let isError = false;
    if (question.questionTitle.trim() == "") {
      newError.questionTitle = "Question title required!";
      isError = true;
    }
    if (question.questionDescription.trim() == "") {
      newError.questionDescription = "Question description is required!";
      isError = true;
    }

    setError(newError);
    return isError;
  }

  function handleSubmitQuestion(e) {
    e.preventDefault();
    if (!validation()) {
      question.userId = userInfo?.user?.id;
      console.log("Going to be submited Question: ", question);
      questionInstance
        .post("/ask", question)
        .then((response) => {
          console.log("Submitted Response: ", response);
        })
        .catch((err) => {
          console.log("unable to submit: ", err);
        });
    }
  }

  return (
    <div className="min-h-screen max-w-6xl mx-auto ">
      <div className=" bg-gray-300 pt-8 pb-6 px-4 rounded-b-md">
        <h1 className=" text-2xl text-center pb-2 text-darkBlue font-medium">
          Steps to write a good question
        </h1>
        <ul className=" mt-4 ml-0 sm:ml-4">
          <BuletList text={"Summerize your problem in a one line title."} />
          <BuletList
            text={"Describe your problem in more detail in description."}
          />
          <BuletList
            text={"Describe what you tried and what you expected to happen."}
          />
          <BuletList text={"Review your question and post it to the site"} />
        </ul>
      </div>
      <div className=" mt-14 sm:mt-28 md:mt-40 px-2 ">
        <h1 className=" text-2xl font-medium text-center text-darkBlue mb-4">
          Ask Question
        </h1>
        <form className="">
          <div className="">
            <label htmlFor="title" className="pl-2 text-gray-500 font-thin">
              Title
            </label>
            <input
              className={` block w-full p-2 border-2 outline-[rgba(241,151,72,0.5)] rounded-md ${
                error?.questionTitle && "placeholder-red-400"
              }`}
              type="text"
              placeholder={
                error?.questionTitle
                  ? error?.questionTitle
                  : "Short question title"
              }
              id="title"
              value={question.questionTitle}
              name="questionTitle"
              onChange={handleOnChange}
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="description"
              className="pl-2 text-gray-500 font-thin"
            >
              Description
            </label>
            <textarea
              //   cols={30}
              className={`block w-full min-h-[80px] h-32 max-h-96 p-2 border-2 outline-[rgba(241,151,72,0.5)] rounded-md ${
                error?.questionDescription && "placeholder-red-400"
              }`}
              type="text"
              placeholder={
                error?.questionDescription
                  ? error?.questionDescription
                  : "Detailed question description"
              }
              id="description"
              value={question.questionDescription}
              name="questionDescription"
              onChange={handleOnChange}
            />
          </div>
          <div className=" mt-3 w-full md:w-40 md:float-right">
            <Button
              label={"Post Question"}
              primary
              onClick={handleSubmitQuestion}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
