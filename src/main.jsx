import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
{/* Importing BrowserRouter as Router */}
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*Wrapping our entire application with router */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
