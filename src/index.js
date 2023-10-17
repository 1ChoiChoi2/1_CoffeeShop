import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faPhone, faLocationCrosshairs, faClock, faArrowUpAZ, faTruck, faCoffee, faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faPhone, faLocationCrosshairs, faClock, faArrowUpAZ, faTruck, faCoffee, faArrowLeft, faTimes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
