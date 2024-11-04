import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Home = () => {
  const { handleLogoutAuth } = useContext(AuthContext);
  return (
    <div>
      <h3>Home</h3>
      <button onClick={handleLogoutAuth}>Logout</button>
    </div>
  );
};

export default Home;
