import React from "react";
import ReactDOM from "react-dom/client";
import "../public/index.html";
import App from "./App";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
