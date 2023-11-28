import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import CircleAvatar from "../circle_avatar";
import { user_profile } from "../../assets";

const QuestionCard = ({ questionData, noOfAnswers, onClick, forAnswer }) => {
  const { question_id, question, first_name, last_name, question_description } =
    questionData || {
      question_id: "",
      question: "Place holder question title here",
      first_name: "first name",
      last_name: "last name",
      question_description:
        "Question description here... this is a place holder befor you pass a real question desctiption this shows how it looks Question description here...",
    };

  return (
    <div
      className={`flex flex-col md:flex-row items-start gap-2 md:gap-4 ${
        !forAnswer && "bg-slate-100"
      } p-2 sm:p-3 rounded-md cursor-pointer`}
      key={question_id}
      onClick={() => onClick && onClick(questionData)}
    >
      <div className="flex flex-row md:flex-col mt-1 shrink-0 max-w-min  items-center gap-2">
        <CircleAvatar imagePath={user_profile} size={35} />
        <p className=" opacity-75">{noOfAnswers || 0}</p>
      </div>
      <div className=" w-full  flex items-center justify-between">
        <div className="">
          <p className="mb-[2px] text-sm md:text-base text-secondary opacity-60 font-mono">
            {`${first_name} ${last_name}`}
          </p>
          <p className="text-base sm:text-lg font-medium -mt-2 text-primaryHover">
            {question}
          </p>
          <p className="text-sm sm:text-base text-gray-500 mr-4">
            {question_description}
          </p>
        </div>
        {!forAnswer && (
          <div className="mr-3">
            <FaChevronDown />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
