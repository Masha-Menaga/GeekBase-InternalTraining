import React, { useState, useRef } from "react";

const Timer = () => {
  //   const [timeStart, setTimeStart] = useState(false);
  const [timeStop, setTimeStop] = useState(false);
  const id = useRef();
  function start() {
    setTimeStop(false);
    id.current = setTimeout(() => {
      setTimeStop(true);
    }, 3000);
  }
  function stop() {
    clearTimeout(id.current);
    setTimeStop(false);
  }
  return (
    <div>
      <h2>Timer component</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      {timeStop && <p>Time out!!</p>}
    </div>
  );
};

export default Timer;
