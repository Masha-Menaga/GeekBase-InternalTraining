import React, { useState } from "react";
import "./UseState.css";

const UseState = () => {
  return (
    <div>
      UseState
      <p className="color">hello Welcome</p>
    </div>
  );
};

export default UseState;

export const InputArray = () => {
  const [number, setNumber] = useState([]);
  let [inputVal, setInputVal] = useState(" ");
  function addItem() {
    setNumber([...number, inputVal]);
    setInputVal();
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter a Value"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      {number.map((item, value) => {
        return <div key={value}>{item}</div>;
      })}
    </>
  );
};

export const ObjectArray = () => {
  const [input, setInput] = useState({
    uname: " ",
    email: " ",
  });
  function handleChange(e) {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  }
  return (
    <>
      <input
        type="text"
        name="uname"
        value={input.uname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={input.email}
        onChange={handleChange}
      />

      <div>name : {input.uname}</div>
      <div>email : {input.email}</div>
    </>
  );
};

export const ModelWindow = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      UseState
      <div>hi</div>
      <button onClick={() => setOpen(true)}>open</button>
      {open && (
        <>
          <div className="model">
            <div>Hi Masha</div>
            <button onClick={() => setOpen(false)}>close</button>
          </div>
        </>
      )}
    </>
  );
};
