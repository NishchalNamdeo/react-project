import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Cardedit from "./Cardedit.jsx";
import "./index.css";
import Card from "./Card.jsx";
import Homepage from "./Homepage.jsx";
import Product from "./Product.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <div>
      <App />
      <Cardedit />
      <Card />
    </div>
    <div>
      <BrowserRouter>
        <Homepage />
        <Product/>
      </BrowserRouter>
    </div>
  </>
);
