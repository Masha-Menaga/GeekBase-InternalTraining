import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const { handleLoginAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleLogin() {
    if (name === "masha") {
      console.log("Login SUccessfully!");
      handleLoginAuth();
      navigate("/");
    } else {
      console.log("Invalid name or password");
    }
  }
  return (
    <div>
      <dialog open>
        <label htmlFor="name"> Name : </label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <br />
        <br />
        <label htmlFor="password"> Password : </label>
        <input type="password" name="password" />
        <br />
        <br />
        <button onClick={handleLogin}>Login</button>
      </dialog>
    </div>
  );
};

export default Login;
