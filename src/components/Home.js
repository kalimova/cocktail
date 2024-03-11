import React from "react";

const Home = () => {
  return (
    <>
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

          <div className="popular__drinks">
            <p className="popular__text">Popular Drinks</p>
          </div>
          <div className="popular__ingredients">
            <p className="popular__text">Popular Ingredients</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
