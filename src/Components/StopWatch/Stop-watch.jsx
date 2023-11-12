import React, { useContext, useEffect, useState } from "react";
import styles from "./stop-watch.module.css";
import { LapContext } from "../../Contexts/LapContext";
import { TimerContext } from "../../Contexts/TimerContext";
import { formatTime } from "../../Utils";
export default function StopWatch() {
  const { lapDispatch } = useContext(LapContext);
  const { timerState, timerStateDispatch } = useContext(TimerContext);
  const [lastAddedTIme, setLastAddedTime] = useState(0);

  const handleStart = () => {
    timerStateDispatch({ type: "START" });
  };
  const handleStop = () => {
    timerStateDispatch({ type: "STOP" });
  };
  const handleLap = () => {
    if (lastAddedTIme !== timerState.elapsedTime) {
      lapDispatch({ type: "ADD_LAP", payload: timerState.elapsedTime });
      setLastAddedTime(timerState.elapsedTime);
    }
  };

  useEffect(() => {
    let intervalId;
    if (timerState.isRunning) {
      intervalId = setInterval(() => {
        timerStateDispatch({ type: "TICK" });
      }, 10);
    } else {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [timerState.isRunning]);

  return (
    <div className={styles.stopWatch__Wrapper}>
      <div className={styles.stopWatch__timer}>
        {formatTime(timerState.elapsedTime)}
      </div>
      <div className={styles.stopWatch__buttons}>
        <button className={styles.start} onClick={handleStart}>
          START
        </button>{" "}
        <button className={styles.lap} onClick={handleLap}>
          LAP
        </button>
        <button className={styles.stop} onClick={handleStop}>
          STOP
        </button>
      </div>
    </div>
  );
}
