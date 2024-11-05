import React, { useContext } from "react";
import products from "../json/products.json";
import ThemeContext from "../context/ThemeContext";

const Body = () => {
  const { increment } = useContext(ThemeContext);

  return (
    <>
      <ul className="display">
        {products.map((product) => (
          <li key={product.id} className="card">
            <div className="card-image">
              <img src={product.imageUrl} alt="{product.name}" />
            </div>

            <p>
              <b>{product.name}</b>
            </p>
            <p>{product.description}</p>
            <p> &#8377; {product.price}</p>

            <button onClick={() => increment(product)} className="cart">
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Body;
