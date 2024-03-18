import React, { useState, useEffect } from "react";
import axios from "axios";

const Details = ({ details }) => {
  const [getId, setGetId] = useState({});
  useEffect(() => {
    axios(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${details[0]}`
    ).then(({ data }) => setGetId(data));
    console.log(getId);
  }, []);
  console.log(details);


  return (
    <>
    {details.map((el) => (
      console.log(el.idDrink)
    ))}
      <html lang="es">
        <body>
          <section class="w-screen h-screen flex justify-center items-center px-2">
            <div class="wrapper max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden">
              <div>
                <img
                  src="https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg"
                  alt="montaña"
                />
              </div>
              <div class="p-3 space-y-3">
                <h3 class="text-gray-700 font-semibold text-md">
                  {details.idDrink}
                </h3>
                <p class="text-sm text-gray-900 leading-sm">
                  {details.idDrink}
                </p>
                <p></p>
              </div>
              <button class="bg-teal-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500">
                Ingredients
              </button>
            </div>
          </section>
        </body>
      </html>
    </>
  );
};

export default Details;
