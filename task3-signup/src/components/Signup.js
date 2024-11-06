import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const Signup = ({ children }) => {
  const { setPass, setCpass, match, signup, setUname } =
    useContext(LoginContext);
  return (
    <div className="container">
      <p className="close">&#10006;</p>
      <p>User Name :</p>
      <input
        type="text"
        onChange={(e) => {
          setUname(e.target.value);
        }}
        placeholder="Enter Name / Email id"
      />
      <p>Password : </p>
      <input
        type="password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
        placeholder="Enter Password"
      />

      <p>Confirm Password : </p>
      <input
        type="password"
        onChange={(e) => {
          setCpass(e.target.value);
        }}
        placeholder="Enter Password Again"
      />
      <p className="password">{match}</p>

      <button onClick={signup}>Signup</button>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
