import React, { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <Counter data={count} add={increment} sub={decrement} />
    </div>
  );
};

export default App;
