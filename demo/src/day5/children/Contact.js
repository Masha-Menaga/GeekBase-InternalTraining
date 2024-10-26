import React, { useContext } from "react";
import User from "./MainRouting";

export const Contact = () => {
  const { name } = useContext(User);
  return <div>Contact {name}</div>;
};
