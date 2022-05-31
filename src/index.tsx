import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainPage } from "./Main";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainPage/>
  </React.StrictMode>
);
