import React from "react";
import Child, { Child1 } from "./Child";

const Props = () => {
  const name = "Masha";
  const message = "hai";
  return (
    <>
      <h1>Parent</h1>
      <Child value={name} message={message} />
    </>
  );
};

export default Props;

export function Parent() {
  const handleClick = () => {
    alert("Button Clicked in the Child Component!");
  };
  return (
    <>
      <Child1 handleClick={handleClick} />
    </>
  );
}
