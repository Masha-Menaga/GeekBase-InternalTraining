import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Param from "./components/Param";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" caseSensitive element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/:meetId" element={<Param />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
