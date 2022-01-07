import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let showSpeech = undefined;

function init() {
  const token = sessionStorage.getItem("setSpeech");
  console.log(token);
  if (!token) {
    sessionStorage.setItem("setSpeech", "true");
    showSpeech = true;
    return;
  }

  switch (token) {
    case "true":
      sessionStorage.setItem("setSpeech", "false");
      showSpeech = false;
      break;
    case "false":
      sessionStorage.setItem("setSpeech", "true");
      showSpeech = true;
      break;
  }
}

init();

if (showSpeech) {
  const app = document.createElement("div");
  app.className = "speechElement";
  document.body.appendChild(app);
  ReactDOM.render(<App />, app);
} else {
  console.log(showSpeech);
  const apps = document.querySelectorAll(".speechElement");
  apps.forEach((app) => {
    app.remove();
  });
}
