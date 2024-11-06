import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const Login = ({ children }) => {
  const { setName, login, match, setPassword } = useContext(LoginContext);
  return (
    <div className="container">
      <p className="close">&#10006;</p>
      <p>User Name :</p>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Name / Email id"
      />
      <p>Password : </p>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter Password"
      />
      <p className="password">{match}</p>
      <button onClick={login}>Login</button>
      <p>
        Not a Member <Link to="/Signup">SignUp</Link> Now
      </p>
    </div>
  );
};

export default Login;
