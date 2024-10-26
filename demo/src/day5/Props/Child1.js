import React from "react";
import { Child2 } from "./Child2";

export const Child1 = () => {
  const value = "good morning";
  return (
    <>
      <div>Child1</div>
      <Child2 value={value} />
    </>
  );
};
