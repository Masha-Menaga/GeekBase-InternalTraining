import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  function handleLogin() {
    if (name === "masha") {
      navigate("/about");
    } else {
      return;
    }
  }
  return (
    <>
      <dialog open>
        {" "}
        <label>Name : </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <label>Password : </label>
        <input type="password" />
        <br />
        <br />
        <button onClick={handleLogin}>Login</button>
      </dialog>
    </>
  );
};

export default Login;
