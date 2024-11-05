import React, { useContext, useRef, useState } from "react";

import "./Cart.css";
import ThemeContext from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { count, color, cart, setCart, add, sub } = useContext(ThemeContext);
  const navigate = useNavigate();

  const deleteRef = useRef();
  const [deleteId, setDeleteId] = useState(null);

  function handleback() {
    navigate("/");
  }
  function handleDelete(id) {
    setDeleteId(id);
    deleteRef.current.showModal();
  }
  function handleYes(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== deleteId));
    deleteRef.current.close();
  }
  function handleClose() {
    deleteRef.current.close();
  }
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={`container ${!color ? "light" : "dark"}`}>
      <div className="cartContainer">
        <button onClick={handleback}>Back</button>
      </div>

      <h3>Your Cart [{count} items]</h3>

      {cart.length === 0 ? (
        <p>Your Cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Name</th>
              <th>Price</th>
              <th>
                <span>Quantity</span>
              </th>
              <th>Total</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.imageUrl} alt={product.name} />
                </td>
                <td>{product.name}</td>
                <td>&#8377; {product.price}</td>
                <td>
                  <button
                    onClick={() => sub(product.id)}
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>{" "}
                  {product.quantity}{" "}
                  <button onClick={() => add(product.id)}>+</button>
                </td>
                <td className="price">
                  &#8377; {product.price * product.quantity}
                </td>
                <td>
                  <img
                    src="./products/delete.png"
                    alt="delete"
                    className="delete"
                    onClick={() => handleDelete(product.id)}
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td>
                <b>Total - </b>
              </td>
              <td>
                <b>Quantity : {totalQuantity}</b>
              </td>
              <td>
                <b>Price : &#8377; {totalPrice}</b>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <dialog ref={deleteRef}>
        <p>Delete! Are you sure?</p>
        <p className="close" onClick={handleClose}>
          &#10006;
        </p>
        <button onClick={handleYes}>Yes</button>
        <button onClick={handleClose}>No</button>
      </dialog>
    </div>
  );
};

export default CartPage;
