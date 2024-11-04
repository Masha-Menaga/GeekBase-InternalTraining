import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      console.log("no-error");
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.log("error");
      console.error("Error Fetch data :", e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Home</h1>
      {data.map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    </>
  );
}

export default App;
