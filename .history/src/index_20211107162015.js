import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";

ReactDOM.render(
  <React.StrictMode>
    <App authService={AuthService} />
  </React.StrictMode>,
  document.getElementById("root")
);
