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
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  function signup() {
    if (!pass.trim() || !cpass.trim()) {
      setMatch("Please Fill the details");
    } else if (pass === cpass) {
      setMatch("Signup Successful");
      navigate("/");
    } else {
      setMatch("Password Mismatch");
    }
  }

  function login() {
    if (!password.trim() || !name.trim()) {
      setMatch("Please Fill the details");
    } else if (password === cpass && name === uname) {
      setIsAuth(true);
      setMatch("");
      navigate("/home");
    } else {
      setMatch("Invalid Username / Password");
    }
  }

  function logout() {
    setIsAuth(false);
    navigate("/");
  }

  function close() {
    navigate("*");
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
        close,
        isAuth,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
