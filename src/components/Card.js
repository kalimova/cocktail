import React, { useState, useEffect } from "react";
import axios from "axios";
import Margarita from "./Margarita";
import Details from "./Details";

const Card = ({ isOpen, setDetails, search}) => {
  const [product, setProduct] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
    .then(({ data }) => setProduct(data.drinks)
    );
  }, []);
  console.log(product);
setDetails(product)

const handleCardClick = (item) => {
  setSelectedItem(item);
};

  return (
    <>
      <div class="heading text-center font-bold text-2xl m-5 text-gray-100">
        Full Responsive Cards
      </div>
      <div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {product.map((el) => (
           <Margarita
           key={el.idDrink}
           el={el}
           setDetails={setDetails}
           onClick={() => handleCardClick(el)}
           search={search}
         />

        ))}
      </div>
    </>
  );
};

export default Card;
