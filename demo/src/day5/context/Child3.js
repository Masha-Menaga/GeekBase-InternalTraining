import React, { useContext } from "react";
import { Child4 } from "./Child4";
import Context from "./Context";

export const Child3 = () => {
  const { hai } = useContext(Context);
  return (
    <div>
      Child3
      <h1>{hai}</h1>
      <Child4 />
    </div>
  );
};
