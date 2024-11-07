import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const Home = () => {
  const { logout } = useContext(LoginContext);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setData(result.data);
    } catch (e) {
      console.error("Error fetch data : ", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleShow(user) {
    navigate("/photo", { state: { user } });
  }

  return (
    <div>
      <div>
        <h1>Photo Gallery</h1>

        <button className="logout" onClick={logout}>
          Logout
        </button>
      </div>
      <ul className="list">
        {data.map((user) => (
          <li key={user.id} onClick={() => handleShow(user)}>
            {user.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
