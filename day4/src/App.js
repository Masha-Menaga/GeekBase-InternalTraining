import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Button from "./Button";

const App = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  useEffect(() => {
    console.log("rendering effect");
  }, [count]);

  return (
    <div>
      {/* <Counter data={count} add={increment} sub={decrement} /> // This is for props with Destructing
       */}

      {/* //Component Composition */}
      <Counter data={count}>
        <Button text="Increment" func={increment} />
        <Button
          text="Decrement"
          func={decrement}
          disable={count < 1 ? true : false}
        />
      </Counter>
    </div>
  );
};

export default App;
