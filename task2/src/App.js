import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";

import CartPage from "./components/CartPage";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  const [color, setColor] = useState(false);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  function background() {
    setColor(!color);
  }
  useEffect(() => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setCount(totalItems);
  }, [cart]);

  const increment = (product) => {
    // setCount(count + 1);
    // setCart([...cart, product]);

    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);
      setCount(count + 1);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  const add = (id) => {
    setCount(count + 1);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const sub = (id) => {
    setCount(count - 1);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  return (
    <>
      <ThemeContext.Provider
        value={{
          color,
          background,
          increment,
          count,
          setCount,
          cart,
          setCart,
          add,
          sub,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/cartpage" element={<CartPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
