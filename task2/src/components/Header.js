import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { background, count } = useContext(ThemeContext);

  return (
    <>
      <nav>
        <img src="./products/logo.png" alt="logo" className="logo" />
        <ul className="list">E-Com Website</ul>
        <Link to="/cartpage">
          <img src="./products/cart.png" className="icon" alt="cart"></img>
          <p className="add">{count}</p>
        </Link>{" "}
        <button className="toggle" onClick={background}>
          Theme
        </button>
      </nav>
    </>
  );
};

export default Header;
