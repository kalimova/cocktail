import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("www.thecocktaildb.com/api/json/v1/1/random.php").then(({ data }) =>
      setProducts(data.drinks)
    );
  }, []);
  console.log(products);
  return (
    <>
    <NavLink to="/details">
      <div className="coctail">
        <div className="container">
          <div className="box__coctail">
            <div className="img">
              <img
                src="https://www.thecocktaildb.com/images/cocktail_right.png"
                alt="Pitch Right"
              ></img>
            </div>

            <div className="box__support">
              <h1 className="text-4xl font-medium">Welcome to TheCocktailDB</h1>
              <p>
                An open, crowd-sourced database of drinks and cocktails from
                around the world.
              </p>
              <p>
                We also offer a free cocktail API for anyone wanting to use it.
              </p>
              <p>
                If you like the site, please consider supporting us on Patreon
                by clicking the link below...
              </p>
              <div className="img">
                <img
                  className="support__img"
                  src="https://www.thecocktaildb.com/images/patreon_logo.png"
                  alt="Pitch Right"
                ></img>
              </div>
              <p>Click to upgrade free API to premium for $3</p>
              <p>Currently (336 supporters)</p>
            </div>

            <div className="img">
              <img
                src="https://www.thecocktaildb.com/images/cocktail_right.png"
                alt="Pitch Right"
              ></img>
            </div>
          </div>

          <hr></hr>
          <div className="input__search">
            <input
              className="input__search__coctail"
              type="text"
              placeholder="Search for a Cocktail..."
            />
            <button>
              <i className="button__search fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <hr></hr>

         
        </div>
      </div>
      </NavLink>
    </>
  );
};

export default Home;
