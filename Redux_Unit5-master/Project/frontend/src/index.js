import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundary";
import App from "./js/App";
import "./index.css";


ReactDOM.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
  document.getElementById("root")
);
