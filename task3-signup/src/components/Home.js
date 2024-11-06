import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(result.data);
    } catch (e) {
      console.error("Error fetch data : ", e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ul className="list">
        {data.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
