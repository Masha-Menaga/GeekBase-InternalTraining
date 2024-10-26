import React, { useContext } from "react";
import User from "./MainRouting";

export const Home = () => {
  const { name, age } = useContext(User);

  return (
    <div>
      Home {name} {age}
    </div>
  );
};
