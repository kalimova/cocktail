import React from "react";

const Details = ({ details }) => {
  return (
    <>
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
                  Instructions
                </h3>
                <p class="text-sm text-gray-900 leading-sm">
                  Rub rim of cocktail glass with lime juice. Dip rim in coarse
                  salt. Shake tequila, blue curacao, and lime juice with ice,
                  strain into the salt-rimmed glass, and serve.
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
