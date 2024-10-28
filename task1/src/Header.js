import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./App.css";

const Header = () => {
  const { background } = useContext(ThemeContext);
  return (
    <>
      <nav>
        <ul className="list">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contacts</li>

          <button className="toggle" onClick={background}>
            Theme Switcher
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Header;
