import React, { createContext, useState } from "react";
const User = createContext();
export default User;

export const MainRouting = ({ children }) => {
  const name = "Masha";
  const age = "30";

  return (
    <>
      <div>MainRouting</div>
      <User.Provider value={{ name, age }}>{children}</User.Provider>
    </>
  );
};
