import React from "react";
import Context from "./Context";
import { Child2 } from "./Child2";

export const Child1 = () => {
  const hai = "good Morning Masha";
  const name = "Masha";
  return (
    <>
      <div>Child1</div>
      <h1>{hai}</h1>
      <h4>{name}</h4>
      <Context.Provider value={{ hai, name }}>
        <Child2 />
      </Context.Provider>
    </>
  );
};
