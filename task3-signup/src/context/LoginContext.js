import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState(" ");
  const [name, setName] = useState("");
  const [password, setPassword] = useState(" ");
  const [cpass, setCpass] = useState(" ");
  const [match, setMatch] = useState("");
  const navigate = useNavigate();
  function signup() {
    if (pass === cpass) {
      navigate("/");
    } else {
      setMatch("Password Mismatch");
    }
  }
  function login() {
    if (password === cpass && name === uname) {
      navigate("/home");
    } else {
      setMatch("UserName / Password Mismatch");
    }
  }
  return (
    <LoginContext.Provider
      value={{
        pass,
        setPass,
        cpass,
        setCpass,
        match,
        signup,
        uname,
        setUname,
        name,
        setName,
        password,
        setPassword,
        login,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
