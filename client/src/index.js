import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
//wrapping app in react router component
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
