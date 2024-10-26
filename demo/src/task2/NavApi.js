import React, { useEffect, useState } from "react";
import "./NavApi.css";

export const NavApi = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const apicall = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const values = await response.json();
      setData(values);
    };
    apicall();
  }, []);
  return (
    <>
      <div>
        <nav>
          <ul className="list">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contacts</li>
            <li onClick={() => setOpen(true)} className="cursor">
              Login
            </li>

            <div className="tog">
              <input type="checkbox" id="check" className="display" />
              <label
                htmlFor="check"
                className="toggle"
                onClick={() => setColor(!color)}
              ></label>
            </div>
          </ul>
        </nav>

        <div
          className="background"
          style={{
            backgroundColor: color ? "black" : "white",
            color: color ? "white" : "black",
          }}
        >
          {data.map((item) => (
            /*<ul key={item.id}>
              <li>ID: {item.id}</li>
              <li>NAME: {item.name}</li>
              <li>USER NAME: {item.username}</li>
              <li>EMAIL: {item.email}</li>
              <li>ADDRESS:</li>
              <ul className="indent">
                <li>Street: {item.address.street}</li>
                <li>Suite: {item.address.suite}</li>
                <li>City: {item.address.city}</li>
                <li>Zipcode: {item.address.zipcode}</li>
                <li>
                  Geo: Lat: {item.address.geo.lat}, Lng: {item.address.geo.lng}
                </li>
              </ul>

              <li>Phone: {item.phone}</li>
              <li>Website: {item.website}</li>
              <li>Company: {item.company.name}</li>
            </ul>*/
            <ul key={item.id} className="product">
              <li>
                <div className="card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="product-img"
                  />
                  <p>{item.title}</p>
                  <p className="price"> &#36;{item.price}</p>
                  <button>Add to cart</button>
                </div>
              </li>
            </ul>
          ))}
        </div>
        {open && (
          <div className="model">
            <p className="close" onClick={() => setOpen(false)}>
              &#10006;
            </p>
            <label>Email id :</label>
            <input type="email" placeholder="eg: abc@mail.com" required />
            <label>Password :</label>
            <input type="password" placeholder="Enter Password" required />
            <p className="right">
              <a href="#">Forgot Password?</a>
            </p>
            <button onClick={() => setOpen(false)}>Login</button>
            <p className="member">
              Not a Member, <a href="#">Signup</a> Now.
            </p>
          </div>
        )}
        {color && <div className="color"></div>}
      </div>
    </>
  );
};
