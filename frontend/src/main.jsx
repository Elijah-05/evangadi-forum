import React from "react";
import ReactDOM from "react-dom/client";
import { ToastProvider } from "react-toast-notifications";
import { Provider } from "jotai";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Provider>
  </React.StrictMode>
);
