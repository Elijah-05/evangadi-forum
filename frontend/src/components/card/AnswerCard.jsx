import React from "react";

const AnswerCard = ({ answerData }) => {
  const { answer, user_name } = answerData;
  return (
    <div className="">
      <p className=" text-secondary opacity-70">{user_name}</p>
      <p className="">{answer}</p>
    </div>
  );
};

export default AnswerCard;
