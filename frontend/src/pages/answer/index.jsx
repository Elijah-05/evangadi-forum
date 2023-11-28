import React, { useEffect, useState } from "react";
import QuestionCard from "../../components/card/QuestionCard";
import { useLocation, useParams } from "react-router-dom";
import { useAtomValue } from "jotai";
import { questions, userData } from "../../atoms";
import Button from "../../components/button";
import AnswerCard from "../../components/card/AnswerCard";
import { answerInstance } from "../../axios/instance";

const Answer = () => {
  const { question_id } = useParams();
  const userInfo = useAtomValue(userData);
  const getQuestions = useAtomValue(questions);
  const [fetchedAnswer, setFetchedAnswer] = useState([]);
  const [answerInput, setAnswerInput] = useState("");
  const [answerPosted, setAnswerPosted] = useState(false);
  const [error, setError] = useState("");

  const data = useLocation();

  const passed_Question_Data = data.state.question;

  useEffect(() => {
    fetchAnswer();
  }, [answerPosted]);

  const fetchAnswer = async () => {
    let token = localStorage.getItem("auth-token");
    console.log({ token });
    answerInstance
      .get("/", {
        headers: {
          "question-id": question_id,
          "x-auth-token": token,
        },
      })
      .then((response) => {
        setFetchedAnswer(response.data);
        console.log("Fetch answer response: ", response);
      })
      .catch((err) => {
        console.log("fetching answer error: ", err);
      });
  };

  function handleOnChange(e) {
    setAnswerInput(e.target.value);
    error && setError("");
  }

  async function handleSubmitAnswer() {
    if (!validation()) {
      await answerInstance
        .post("/", {
          answer: answerInput,
          userId: userInfo?.user?.id,
          questionId: question_id,
        })
        .then((response) => {
          console.log("Answer Response: ", response);
          setAnswerInput("");
          setAnswerPosted(true);
        })
        .catch((err) => {
          console.log("Unable to post answer: ", err);
        });
    }
  }

  function validation() {
    let isError = false;

    if (answerInput.trim() == "") {
      setError("Answer is required!");
      isError = true;
    }

    return isError;
  }

  return (
    <div className=" min-h-screen max-w-6xl mx-auto">
      <div className=" sticky top-20 z-10 bg-gray-200 pt-2 md:pt-4 pb-2 px-2 rounded-b-md">
        <QuestionCard
          questionData={passed_Question_Data}
          noOfAnswers={fetchedAnswer?.length}
          forAnswer
        />
      </div>

      <div className=" flex flex-col md:flex-row mt-3 gap-2 sm:gap-7">
        <div className="pl-4 md:pl-7 ">
          <span className=" font-medium">Ans</span>
        </div>
        <div className="pl-4 md:pr-4 md:pl-0 flex flex-col mr-4 gap-6">
          {fetchedAnswer?.map((ans) => {
            return <AnswerCard answerData={ans} />;
          })}
        </div>
      </div>

      <hr className=" mt-6 mb-4" />
      <div className="pl-3  md:pl-20 mr-4 xl:mr-0">
        <textarea
          //   cols={30}
          className={`block w-full min-h-[80px] h-32 max-h-96 p-2 border-2 outline-[rgba(241,151,72,0.5)] rounded-md ${
            error && "placeholder-red-400"
          }`}
          type="text"
          placeholder={error ? error : "Write your answer here..."}
          id="answer"
          value={answerInput}
          name="answer"
          onChange={handleOnChange}
        />
        <div className=" mt-3 w-full md:w-40 md:float-right">
          <Button label={"Answer"} primary onClick={handleSubmitAnswer} />
        </div>
      </div>
    </div>
  );
};

export default Answer;
