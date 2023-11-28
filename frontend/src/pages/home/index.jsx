import React, { useEffect, useState } from "react";
import LandingPage from "../landing";
import {
  answerInstance,
  questionInstance,
  userInstance,
} from "../../axios/instance";
import { useAtom } from "jotai";
import { questions, userData } from "../../atoms";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import QuestionCard from "../../components/card/QuestionCard";

const HomePage = () => {
  const [userInfo, setUserInfo] = useAtom(userData);
  const [getQuestions, setQuestions] = useAtom(questions);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("auth-token");

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (userInfo?.user?.display_name) {
      fetchAllQuestions();
      fetchAllAnswers();
    }
  }, [userInfo]);

  const fetchAllQuestions = async () => {
    setIsLoading(true);
    !!token &&
      (await questionInstance
        .get("/", {
          headers: {
            "x-auth-token": token,
          },
        })
        .then((response) => {
          console.log("QuestionFetched!...");
          setQuestions(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("Unable to fetch questions: ", err);
          setIsLoading(false);
        }));
  };

  const fetchAllAnswers = async () => {
    await answerInstance
      .get("/all", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log("Response for fetching all answers: ", response);
        setAnswers(response.data);
      })
      .catch((err) => {
        console.log("Error while fetching all ansers: ", err);
      });
  };

  function handleQuestionDetail(question) {
    console.log("Question detail Page for question_id: ", question);
    navigate(`/answers/${question.question_id}`, { state: { question } });
  }

  return (
    <div className="min-h-screen ">
      {!userInfo?.token ? (
        <LandingPage />
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className="pt-10 px-4 rounded-b-md sticky top-20 left-0 right-0 flex justify-between items-center bg-gray-300 shadow-md">
            <h1 className=" text-2xl text-darkBlue font-medium">
              Welcome:{" "}
              <span className=" text-darkBlue">
                {userInfo?.user?.display_name}
              </span>
            </h1>
            <Link to={"/ask"} className=" my-4">
              <Button label={"Ask Question"} primary />
            </Link>
          </div>

          <div className="mt-20 px-2">
            <h1 className=" text-2xl font-medium">
              Questions{" "}
              <span className=" text-xl text-secondary">
                {getQuestions?.length}
              </span>
            </h1>
            {!isLoading ? (
              <div className="mt-6 flex flex-col gap-4">
                {getQuestions?.map((question) => {
                  return (
                    <QuestionCard
                      questionData={question}
                      noOfAnswers={
                        answers?.filter(
                          (ans) => ans.question_id === question.question_id
                        ).length
                      }
                      onClick={handleQuestionDetail}
                      key={question.question_id}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="">No qest</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
