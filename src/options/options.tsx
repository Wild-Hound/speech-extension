import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import App from "./App";

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Helmet>
    <App />
  </React.StrictMode>,
  root
);
