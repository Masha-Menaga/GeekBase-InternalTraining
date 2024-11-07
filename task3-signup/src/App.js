import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Home from "./components/Home";
import Error from "./components/Error";
import Photo from "./components/Photo";
import ProductiveRoute from "./components/ProductiveRoute";
import { LoginProvider } from "./context/LoginContext";

const App = () => {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/home"
            element={
              <ProductiveRoute>
                <Home />
              </ProductiveRoute>
            }
          />
          <Route
            path="/photo"
            element={
              <ProductiveRoute>
                <Photo />
              </ProductiveRoute>
            }
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
};

export default App;
