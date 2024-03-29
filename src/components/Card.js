import React, { useState, useEffect } from "react";
import axios from "axios";
import Margarita from "./Margarita";
import Details from "./Details";
import { NavLink } from "react-router-dom";

const Card = ({ isOpen, setSelectedItem, search }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin").then(
      ({ data }) => setProduct(data.drinks)
    );
  }, []);

 

  return (
    <>
      <div class="heading text-center font-bold text-2xl m-5 text-gray-100">
        Full Responsive Cards
      </div>
      <div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {product.map((el) => (
          <Margarita
            setSelectedItem={setSelectedItem}
            el={el}
            search={search}
          />
        ))}
      </div>
    </>
  );
};

export default Card;
