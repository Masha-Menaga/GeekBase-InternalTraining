import { useState } from "react";
import Main from "./Main";
import ThemeContext from "./ThemeContext";

function App() {
  const [color, setColor] = useState(false);

  function background() {
    setColor(!color);
  }
  return (
    <>
      <ThemeContext.Provider value={{ color, background }}>
        <Main />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
