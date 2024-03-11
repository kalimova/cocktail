import React from "react";

const Margarita = ({ el }) => {
  return (
    <>
      <div class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
        <img class="w-full" src={el.strDrinkThumb} alt="margarita" />
        <div class="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
          <span class="mr-1 p-1 px-2 font-bold">{el.idDrink}</span>
          <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
            {el.strAlcoholic}
          </span>
          <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">
            {el.strCategory}
          </span>
        </div>
        <div class="desc p-4 text-gray-800">
          <a>{el.strDrink}</a>
          <a>{el.strDrinkAlternate}</a>
          <span class="description text-sm block py-2 border-gray-400 mb-2">
            {el.strIBA}
            <a>{el.strImageAttribution}</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Margarita;
{
  /* <div className="flex flex-wrap -mx-4">
            <div className="wrapper">
              <div>{el.idDrink}</div>
              <div>{el.strAlcoholic}</div>
              <div>{el.strCategory}</div>
              <div>{el.strDrink}</div>
              <div>{el.strDrinkAlternate}</div>
              <div>{el.strIBA}</div>
              <div>{el.strImageAttribution}</div>
            </div>
            <div className="img_alco">
              <img src={el.strDrinkThumb} alt="margarita" />
            </div>
            <div>{el.strIngredient1}</div>
            <div>{el.strIngredient2}</div>
            <div>{el.strIngredient3}</div>
            <div>{el.strIngredient4}</div>
            <div className="instruction">{el.strInstructions}</div>
            <div className="instruction-1">{el.strInstructionsDE}</div>
            <div className="instruction-2">{el.strInstructionsIT}</div>
          </div> */
}
