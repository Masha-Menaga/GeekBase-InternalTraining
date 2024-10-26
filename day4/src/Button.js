import React from "react";

const Button = ({ text, func, disable }) => {
  return (
    <div>
      <button onClick={func} disabled={disable}>
        {text}
      </button>
    </div>
  );
};

export default Button;
