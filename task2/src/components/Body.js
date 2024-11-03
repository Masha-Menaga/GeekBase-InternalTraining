import React from "react";
import products from "../json/products.json";
import { Link } from "react-router-dom";

const Body = () => {
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
            <Link to="/cartpage">
              <button className="cart">Add to cart</button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Body;
