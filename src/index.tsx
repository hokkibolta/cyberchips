import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// scss
import "./style/global.scss";
import "./style/customStyle.scss";
// bootstrap
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
