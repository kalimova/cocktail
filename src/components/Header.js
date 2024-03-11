import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ setIsOpen }) => {
  return (
    <>
      <div className="Box">
        <div className="container">
          <div className="Boxes">
            <div className="image">
              <NavLink to="/card">
              <img
                src="https://www.thecocktaildb.com/images/logo.png"
                alt="logo"
              />
              </NavLink>
            </div>

            <div className="Box__input">
              <NavLink to="/">
                <button  className="Box_button">
                Home
              </button>
              </NavLink>
              
              <button className="button__link">API</button>
              <input type="text" placeholder="Search" className="input" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
