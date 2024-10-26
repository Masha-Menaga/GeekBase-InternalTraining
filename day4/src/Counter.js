import React from "react";
import Button from "./Button";

const Counter = (val, add, sub) => {
  return (
    <div>
      <h1>Count: {val.data} </h1>
      <Button text={add} />
      <Button text={sub} />
    </div>
  );
};

export default Counter;
