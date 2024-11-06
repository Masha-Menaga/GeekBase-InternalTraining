import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { LoginProvider } from "./context/LoginContext";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginProvider>
                <Login />
              </LoginProvider>
            }
          />
          <Route
            path="/signup"
            element={
              <LoginProvider>
                <Signup />
              </LoginProvider>
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
