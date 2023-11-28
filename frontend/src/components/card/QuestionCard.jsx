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
        "Question description here... this is a place holder befor you pass a real question desctiption this shows how it looks Question description here... this is a place holder befor you pass a real question desctiption this shows how it looks Question description here... this is a place holder befor you pass a real question desctiption this shows how it looks Question description here... this is a place holder befor you pass a real question desctiption this shows how it looks Question description here... this is a place holder befor you pass a real question desctiption this shows how it looks Question description here... this is a place holder befor you pass a real question desctiption this shows how it looks",
    };

  return (
    <div
      className={`flex items-start gap-4 ${
        !forAnswer && "bg-gray-200"
      } p-3 rounded-md cursor-pointer`}
      key={question_id}
      onClick={() => onClick && onClick(questionData)}
    >
      <div className=" mt-1 shrink-0 max-w-min flex flex-col items-center gap-2">
        <CircleAvatar imagePath={user_profile} size={46} />
        <p className="">{noOfAnswers || 0}</p>
      </div>
      <div className=" w-full  flex items-center justify-between">
        <div className="">
          <p className="mb-[2px] text-secondary">
            {`${first_name} ${last_name}`}
          </p>
          <p className=" text-lg font-medium -mt-2 text-primaryHover">
            {question}
          </p>
          <p className=" text-gray-500 text-justify mr-4">
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
