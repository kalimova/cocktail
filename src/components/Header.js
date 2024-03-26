import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ setIsOpen, setSearch }) => {
  const getByTitle = (e) => {
    if (e.key === "Enter" && e.target.value.length >= 5) {
      setSearch(e.target.value);
    }
  };
const clickHandle = () => {
  window.location.reload();   
}
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
<button onClick={clickHandle}>
<i class="fa-solid fa-spinner fa-xl" style={{color: "#FFD43B"}}></i>
</button>
              <div onKeyDown={(e) => getByTitle(e)}>
                <input type="text" placeholder="Search" className="input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
