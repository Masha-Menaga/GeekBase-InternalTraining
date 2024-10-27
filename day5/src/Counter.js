import React, { useContext } from "react";
import CounterContext from "./CounterContext";
import Button from "./Button";

const Counter = () => {
  const { count } = useContext(CounterContext);
  return (
    <div>
      <h1>Count: {count} </h1>
      <Button />
    </div>
  );
};

export default Counter;
