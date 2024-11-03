import React, { useContext } from "react";
import "../App.css";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { background } = useContext(ThemeContext);

  return (
    <>
      <nav>
        <img src="./products/logo.png" alt="logo" className="logo" />
        <ul className="list">E-Com Sample Website</ul>
        <img src="./products/cart.png" className="icon" alt="cart"></img>{" "}
        <button className="toggle" onClick={background}>
          Theme
        </button>
      </nav>
    </>
  );
};

export default Header;
