import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectiveRoute from "./components/ProtectiveRoute";

function App() {
  return (
    <>
      <AuthProvider>
        {" "}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <ProtectiveRoute>
                    <Home />
                  </ProtectiveRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectiveRoute>
                    <About />
                  </ProtectiveRoute>
                }
              />
            </Route>
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
