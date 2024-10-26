import React, { useContext } from "react";
import Context from "./Context";

export const Child4 = () => {
  const { hai } = useContext(Context);
  return (
    <div>
      Child4
      <h1>{hai}</h1>
    </div>
  );
};
