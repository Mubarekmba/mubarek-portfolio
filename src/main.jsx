import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Bootstrap (React-Bootstrap depends on Bootstrap styles)
import "bootstrap/dist/css/bootstrap.min.css";

// Global theme + component styling (custom, minimal, scalable)
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


