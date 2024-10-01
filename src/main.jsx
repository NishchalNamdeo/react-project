import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Cardedit from "./Cardedit.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <div>
    <App />
    <Cardedit />
  </div>
);
