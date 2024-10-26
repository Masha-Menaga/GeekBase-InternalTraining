import React, { useContext } from "react";
import { Child3 } from "./Child3";
import Context from "./Context";

export const Child2 = () => {
  const { name } = useContext(Context);
  return (
    <div>
      Child2
      <h4>{name}</h4>
      <Child3 />
    </div>
  );
};
