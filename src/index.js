import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./Store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  rootElement
);
