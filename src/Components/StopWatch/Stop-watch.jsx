import React from "react";
import styles from "./stop-watch.module.css";
export default function StopWatch() {
  return (
    <div className={styles.stopWatch__Wrapper}>
      <div className={styles.stopWatch__timer}>33:23:00</div>
      <div className={styles.stopWatch__buttons}>
        <button className={styles.start}>START</button>{" "}
        <button className={styles.lap}>LAP</button>
        <button className={styles.stop}>STOP</button>
      </div>
    </div>
  );
}
