import React, { useState, useEffect } from "react";
import axios from "axios";

const Margarita = ({ el, setDetails, onClick, search }) => {
  console.log(el.strDrink);
  
  return (
    <>
      {el.strDrink.includes(search) && (
        <>
          <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
            <img className="w-full" src={el.strDrinkThumb} alt="margarita" />
            <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
              <span className="mr-1 p-1 px-2 font-bold">{el.idDrink}</span>
              <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">{el.strAlcoholic}</span>
              <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">{el.strCategory}</span>
            </div>
            <div className="desc p-4 text-gray-800">
              <p>{el.strDrink}</p>
              <p>{el.strDrinkAlternate}</p>
              <span className="description text-sm block py-2 border-gray-400 mb-2">
                {el.strIBA}
                <p>{el.strImageAttribution}</p>
              </span>
            </div>
          </div>
          <div className="margarita-card" onClick={onClick}>
            {el.strDrinkThumb}
            {el.strDrink}
          </div>
        </>
      )}
    </>
  );
}; 



export default Margarita;


// import React from "react";

// const Margarita = ({ product, isSelected, onClick }) => {
//   return (
//     <>
//     <div
//       className={`card ${isSelected ? "selected" : ""}`}
//       onClick={onClick}
//     >
//       <img src={product.strDrinkThumb} alt={product.strDrink} />
//       <h3>{product.strDrink}</h3>
//     </div>
//     </>
//   );
// };

// export default Margarita;
