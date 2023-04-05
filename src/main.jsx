import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CreateContextProvider } from "./context/useCreateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CreateContextProvider>
    <App />
  </CreateContextProvider>
);
