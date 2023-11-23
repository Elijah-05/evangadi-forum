import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing/index.jsx";
import SignUp from "./pages/signup/index.jsx";
import axios from "axios";
import { useSetAtom } from "jotai";
import { userData } from "./atoms/index.jsx";
import Layout from "./layout/index.jsx";

const App = () => {
  const setUserData = useSetAtom(userData);

  async function checkLoggedIn() {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    } else {
      const userRes = await axios.get("http://localhost:4000/api/users", {
        headers: {
          "x-auth-token": token,
        },
      });

      setUserData({
        token,
        user: {
          id: userRes.data.data.user_id,
          display_name: userRes.data.data.user_name,
        },
      });
    }
  }

  function logout() {
    setUserData({
      token: null,
      user: null,
    });

    localStorage.setItem("auth-token", "");
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
