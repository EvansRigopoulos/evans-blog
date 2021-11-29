import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./Navbar";

ReactDOM.render(
  <Router>
    <NavBar />
    <div id="page-body">
      <App />
    </div>
  </Router>,
  document.getElementById("root")
);
