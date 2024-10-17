import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homeproduct from "./components/Homeproduct";
import Show from "./components/Show";
import Services from "./components/Services";

const Product = () => {
  return (
    <>
      <div className="p-10 flex gap-20">
        <Link to="/">Home</Link>
        <Link to="/show">Show</Link>
        <Link to="/services">services</Link>
      </div>
      <hr />

      <Routes>
        <Route path="/" element={<Homeproduct />} />
        <Route path="/show" element={<Show />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default Product;
