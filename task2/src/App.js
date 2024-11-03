import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";

import CartPage from "./components/CartPage";
import Home from "./components/Home";

function App() {
  const [color, setColor] = useState(false);

  function background() {
    setColor(!color);
  }
  return (
    <>
      <ThemeContext.Provider value={{ color, background }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cartpage" element={<CartPage />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
