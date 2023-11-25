import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing/index.jsx";
import axios from "axios";
import { useSetAtom } from "jotai";
import { userData } from "./atoms/index.jsx";
import Layout from "./layout/index.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/home/index.jsx";

const App = () => {
  const setUserData = useSetAtom(userData);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

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
          element: <HomePage />,
        },
        {
          path: "/home",
          element: <div>Home</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
