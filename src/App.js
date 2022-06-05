import { useEffect, useState } from "react";
import Button from "./Components//Button/Button";
import React from "react";

function App() {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerOn])
  return (
    <div>
      <div>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + ((time / 10))).slice(-2)}</span>
      </div>
      <div>
        <Button onClick={() => setTimerOn(true)}>START</Button>
        <Button onClick={() => setTimerOn(false)}>STOP</Button>
        <Button onClick={() => setTime(0)}>RESET</Button>
      </div>
    </div>
  );
};

export default App;
