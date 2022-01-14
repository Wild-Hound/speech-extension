import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const apps = document.querySelectorAll(".speechElement");
const app = document.createElement("div");
app.className = "speechElement";

let showSpeech = apps.length ? false : true;

if (showSpeech) {
  document.body.appendChild(app);
  ReactDOM.render(<App />, app);
} else {
  apps.forEach((app) => {
    app.remove();
  });
}
