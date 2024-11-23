import React, { useEffect, useState } from "react";
import routineJSONData from "../data/routine.json";

const DailyRoutine = () => {
  const [routineList, setRoutineList] = useState([]);
  useEffect(() => {
    setRoutineList(routineJSONData);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Aarathi Schedule</h1>
      <table
        border="1"
        style={{ width: "60%", textAlign: "left", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2" }}>
              Daily
            </th>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2" }}>Time</th>
          </tr>
        </thead>
        <tbody>
          {routineList.map((row, index) => (
            <tr key={index}>
              <td style={{ padding: "8px" }}>{row.name}</td>
              <td style={{ padding: "8px" }}>{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DailyRoutine;
