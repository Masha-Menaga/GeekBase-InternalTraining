import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const Photo = () => {
  const { logout } = useContext(LoginContext);
  const location = useLocation();
  const { user } = location.state || {};
  return (
    <div className="photo-container">
      <h1>Photo</h1>
      <div className="photo">
        <Link to="/home">
          <button>Back</button>
        </Link>

        <button onClick={logout}>Logout</button>
      </div>
      <h2>{user?.title}</h2>

      <img src={user?.thumbnailUrl} alt={user?.title} />
    </div>
  );
};

export default Photo;
