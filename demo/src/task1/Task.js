import React, { useState } from "react";
import "./Task.css";
const Task = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li
              className="pointer"
              onClick={() => setOpen(true)}
              onDoubleClick={() => setOpen(false)}
            >
              Login
            </li>
          </ul>
        </nav>
        {open && (
          <div class="mod">
            <div class="model">
              <p class="close" onClick={() => setOpen(false)}>
                &#10006;
              </p>
              <div>User Name : </div>
              <input type="text" placeholder="Enter Name / Email id" />
              <div>Password : </div>
              <input type="password" placeholder="Enter Password" />
              <div>
                <button onClick={() => setOpen(false)}>Login</button>
                <a href="#">Forgot Password?</a>
                <p>
                  Not a Member <a href="#">SignUp</a> Now
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Task;
