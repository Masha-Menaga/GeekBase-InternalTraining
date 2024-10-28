import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Main = () => {
  const { color } = useContext(ThemeContext);
  return (
    <div className={`container ${!color ? "dark" : "light"}`}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Main;
