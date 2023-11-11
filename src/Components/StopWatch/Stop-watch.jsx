import React, { useContext, useEffect, useState } from "react";
import styles from "./stop-watch.module.css";
import { LapContext } from "../../Contexts/LapContext";
import { TimerContext } from "../../Contexts/TimerContext";
export default function StopWatch() {
  const { lapState, lapDispatch } = useContext(LapContext);
  const { timerState, timerStateDispatch } = useContext(TimerContext);
  const [lastAddedTIme, setLastAddedTime] = useState(0);
  // function millisecondsToHMS(milliseconds) {
  //   let minutes = Math.floor(milliseconds / 60000);
  //   let remainingSeconds = Math.floor((milliseconds % 60000) / 1000);
  //   let remainingmilli = milliseconds % 1000;

  //   console.log(
  //     `${minutes} minutes and ${remainingSeconds} second and  ${remainingmilli} milisecond`
  //   );
  // }
  function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 100);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const remainingMilliseconds = milliseconds % 100;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}.${String(remainingMilliseconds).padStart(2, "0")}`;
  }

  const handleStart = () => {
    timerStateDispatch({ type: "START" });
  };
  const handleStop = () => {
    timerStateDispatch({ type: "STOP" });
    // formatTime(timerState.elapsedTime);
  };
  const handleLap = () => {
    if (lastAddedTIme !== timerState.elapsedTime) {
      lapDispatch({ type: "ADD_LAP", payload: timerState.elapsedTime });
      setLastAddedTime(timerState.elapsedTime);
    }
  };
  // useEffect(() => {
  //   formatTime(timerState.elapsedTime);
  // }, [timerState.elapsedTime]);
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

  // let hour = timerState.elapsedTime / 3600;

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
