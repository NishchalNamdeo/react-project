import React, { useState } from "react";
import axios from "axios";



const Show = () => {
  const [Product, setProduct] = useState([]);

  const getproduct = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((Product) => {
        console.log(Product);
        setProduct(Product.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-20">
      <button onClick={getproduct} className="rounded px-5 py-2 bg-red-600">
        call product api
      </button>

      <hr />

      <ul>
        {Product.length > 0 ? (
          Product.map((p) => (
            <li className="w-52 p-4 bg-red-300 rounded mt-2  ">{p.title}</li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </div>
  );
};

export default Show;
