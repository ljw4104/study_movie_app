import React, { useState } from "react";

function ClickCount(pop) {
  const [count, setcount] = useState(0);
  const [timerID, setTimerID] = useState(0);
  function up() {
    if (timerID != 0) return;
    console.log("up");
    const id = setInterval(() => {
      setcount((count) => {
        return count + 1;
      });
    }, 100);
    setTimerID(id);
  }
  function stop() {
    clearInterval(timerID);
    setTimerID(0);
    setcount(0);
  }

  return (
    <div>
      <h2>{pop.name ? pop.name : "클릭카운터"}</h2>
      <div>Count : {count}</div>
      <div>타이머의 ID: {timerID}</div>
      <button onClick={up}>시작</button>
      <button onClick={stop}>종료</button>
    </div>
  );
}

export default ClickCount;
