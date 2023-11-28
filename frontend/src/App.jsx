import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAtom } from "jotai";
import { userData } from "./atoms/index.jsx";
import Layout from "./layout/index.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/home/index.jsx";
import AskQuestion from "./pages/ask_question/index.jsx";
import { userInstance } from "./axios/instance.jsx";
import Answer from "./pages/answer/index.jsx";
import PageNotFound from "./pages/page_not_found/index.jsx";

const App = () => {
  const [userInfo, setUserInfo] = useAtom(userData);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    !userInfo?.user?.display_name && checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (!token) {
      localStorage.setItem("auth-token", "");
      token = "";
      setUserInfo(null);
    } else {
      const response = await userInstance.get("/", {
        headers: {
          "x-auth-token": token,
        },
      });
      setUserInfo({
        token,
        user: {
          id: response.data.data.user_id,
          display_name: response.data.data.user_name,
        },
      });
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/ask",
          element: <AskQuestion />,
        },
        {
          path: "/answers/:question_id",
          element: <Answer />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
