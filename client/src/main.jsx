import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import { AutProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AutProvider>
        <App />
      </AutProvider>
    </BrowserRouter>
  </React.StrictMode>
);
