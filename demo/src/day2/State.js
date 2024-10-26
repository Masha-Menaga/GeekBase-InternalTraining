import React, { useState } from "react";

const State = () => {
  let [value, setIncrement] = useState(0);
  const increment = () => {
    setIncrement(value + 1);
  };
  const decrement = () => {
    setIncrement(value - 1);
  };
  return (
    <>
      {value}
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <div>State</div>
    </>
  );
};

export default State;
