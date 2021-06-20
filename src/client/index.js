import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

const root = document.getElementById("root");
root.style.background = "#c3c3c3";
root.style.height = "70vh";

ReactDOM.hydrate(<App />, root);

//module.hot.accept();
