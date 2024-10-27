import { useEffect, useState } from "react";
import Counter from "./Counter";

import CounterContext from "./CounterContext";

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
      <CounterContext.Provider value={{ count, increment, decrement }}>
        <Counter />
      </CounterContext.Provider>

      {/* <Counter data={count}>
        <Button text="Increment" func={increment} />
        <Button
          text="Decrement"
          func={decrement}
          disable={count < 1 ? true : false}
        />
      </Counter> */}
    </div>
  );
};

export default App;
