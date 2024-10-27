import { createContext } from "react";

const CounterContext = createContext();

export default CounterContext;

export const useContext = {
  count: 0,
  increment: () => {},
  decrement: () => {},
};
