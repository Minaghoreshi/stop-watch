import React, { useContext } from "react";
import styles from "./Lap.module.css";
import { LapContext } from "../../Contexts/LapContext";
import { formatTime } from "../StopWatch/Stop-watch";
export default function Lap() {
  const { lapState } = useContext(LapContext);
  console.log(lapState);
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Lap</th>
          <th>Time</th>
          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {lapState.map((time, index) => {
          let currentLapTime;
          if (index - 1 >= 0) {
            currentLapTime = formatTime(time - lapState[index - 1]);
          } else {
            currentLapTime = formatTime(time);
          }
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{currentLapTime}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
