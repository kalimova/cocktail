import React, { useState, useEffect } from "react";
import axios from "axios";
import Margarita from "./Margarita";

const Card = ({ isOpen }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
      ({ data }) => setProduct(data.drinks)
    );
  }, []);
  console.log(product);

  return (
    <>
      <div class="heading text-center font-bold text-2xl m-5 text-gray-100">
        Full Responsive Video Cards
      </div>
      <div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {product.map((el) => (
          <Margarita el={el} />
        ))}
      </div>
    </>
  );
};

export default Card;
