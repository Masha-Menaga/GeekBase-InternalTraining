import React from "react";
import { useState } from "react";

const State = () => {
  //let count = 0; //its not working in react
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [bool, setBool] = useState(false);
  const [list] = useState(["apple", "banana", "grapes"]);
  const [menu] = useState([
    { id: 1, name: "orange" },
    { id: 2, name: "pinapple" },
    { id: 3, name: "jackfruit" },
  ]);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br /> <br />
      <label htmlFor="name">Name : </label>
      <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
      <label htmlFor="location">Location : </label>
      <input
        type="text"
        id="location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setBool(true)}>Submit</button>
      <h4>Details : </h4>
      {}
      {bool ? (
        <>
          <p>{name}</p>
          <p>{location}</p>
        </>
      ) : (
        <p>Please Submit your Details.</p>
      )}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default State;
