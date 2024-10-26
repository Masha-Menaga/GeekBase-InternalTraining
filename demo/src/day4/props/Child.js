import React from "react";

const Child = (props) => {
  return (
    <div>
      {props.value}
      {props.message}
    </div>
  );
};

export default Child;

export const Child1 = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>Click Me!</button>
    </>
  );
};
