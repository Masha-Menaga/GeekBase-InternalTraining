import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../App.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  const { color } = useContext(ThemeContext);
  return (
    <div className={`container ${!color ? "light" : "dark"}`}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
