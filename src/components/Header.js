import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ setIsOpen, setSearch }) => {
  const getByTitle = (e) => {
    if (e.key === "Enter" && e.target.value.length >= 5) {
      setSearch(e.target.value);
    }
  };
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
                <button className="Box_button">Home</button>
              </NavLink>

              <NavLink to="/details">
                <button className="button__link">API</button>
              </NavLink>
              <input
                type="text"
                placeholder="Search"
                className="input"
                onKeyDown={getByTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
