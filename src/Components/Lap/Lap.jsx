import React from "react";
import styles from "./Lap.module.css";
export default function Lap() {
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
        <tr>
          <td>1</td>
          <td>00:06:20</td>
        </tr>{" "}
        <tr>
          <td>1</td>
          <td>00:06:20</td>
        </tr>{" "}
        <tr>
          <td>1</td>
          <td>00:06:20</td>
        </tr>
      </tbody>
    </table>
  );
}
