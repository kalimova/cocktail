import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Details = ({ selectedItem }) => {
  return (
    <>
      <section class="w-screen h-screen flex justify-center items-center px-2">
        <div class="wrapper max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden">
          <div>
            <img src={selectedItem.strDrinkThumb} />
          </div>
          <div class="p-3 space-y-3">
            <h3 class="text-gray-700 font-semibold text-md">
              {selectedItem.idDrink}
            </h3>
            <p class="text-sm text-gray-900 leading-sm">
              {selectedItem.strDrink}
            </p>
          </div>
          <NavLink to="/card">
            <button class="bg-teal-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500">
              Назад
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Details;
