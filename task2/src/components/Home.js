import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../App.css";

import Body from "./Body";

const Home = () => {
  const { color } = useContext(ThemeContext);
  return (
    <div className={`container ${!color ? "light" : "dark"}`}>
      <Body />
    </div>
  );
};

export default Home;
