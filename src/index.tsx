import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  Kovan,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
} from "@usedapp/core";
// scss
import "./style/global.scss";
import "./style/customStyle.scss";
// bootstrap
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";

const container = document.getElementById("root") as Element;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <DAppProvider config={{autoConnect: true}}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);
