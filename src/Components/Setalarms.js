import React, { useState } from "react";


function Setalarms() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [alarmHours, setAlarmHours] = useState(0);
  const [alarmMinutes, setAlarmMinutes] = useState(0);
  const [isAlarmSet, setIsAlarmSet] = useState(false);

  const updateTime = () => {
    const currentDate = new Date();
    setHours(currentDate.getHours());
    setMinutes(currentDate.getMinutes());
    setSeconds(currentDate.getSeconds());

    // Check if alarm time has been reached
    if (
      isAlarmSet &&
      currentDate.getHours() === alarmHours &&
      currentDate.getMinutes() === alarmMinutes &&
      currentDate.getSeconds() === 0
    ) {
      alert("Alarm!");
      setIsAlarmSet(false);
    }
  };

  const setAlarmTime = () => {
    setIsAlarmSet(true);
  };

  return (
    <div className="App">
      <div className="clock">
        <div className="hand hour" style={{ transform: `rotate(${(hours % 12) * 30}deg)` }}></div>
        <div className="hand minute" style={{ transform: `rotate(${minutes * 6}deg)` }}></div>
        <div className="hand second" style={{ transform: `rotate(${seconds * 6}deg)` }}></div>
        <div className="alarm">
          <input type="number" placeholder="HH" min="0" max="23" onChange={(e) => setAlarmHours(e.target.value)} />
          <input type="number" placeholder="MM" min="0" max="59" onChange={(e) => setAlarmMinutes(e.target.value)} />
          <button onClick={setAlarmTime}>Set Alarm</button>
        </div>
      </div>
    </div>
  );
}

export default Setalarms;
