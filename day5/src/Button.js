import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Button = () => {
  const { increment, decrement, count } = useContext(CounterContext);
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={count < 1 ? true : false}>
        deccrement
      </button>
    </div>
  );
};

export default Button;
