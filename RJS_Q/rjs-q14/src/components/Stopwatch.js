// components/Stopwatch.js
import React, { useState, useEffect, useRef } from "react";
const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0); // Tracks elapsed time
  const [isRunning, setIsRunning] = useState(false); // Indicates whether stopwatch is running
  const intervalRef = useRef(null); // Reference to interval ID
  // useEffect to start and stop interval based on isRunning
  useEffect(() => {
    if (isRunning) {
      // Start interval that increments seconds every 1000ms
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    // Cleanup: clear interval when isRunning changes or on component unmount
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);
  // Function to format time from seconds → mm:ss
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const sec = (secs % 60).toString().padStart(2, "0");
    return `${mins}:${sec}`;
  };
  // Handlers for buttons
  const handleStart = () => setIsRunning(true); // Start timer
  const handleStop = () => {
    setIsRunning(false); // Stop timer
    clearInterval(intervalRef.current); // Clear running interval
  };
  const handleReset = () => {
    setIsRunning(false); // Stop timer
    clearInterval(intervalRef.current); // Clear interval
    setSeconds(0); // Reset counter
  };
  return (
    <div className="stopwatch-container">
      {/* Time display */}
      <div className="display">{formatTime(seconds)}</div>
      {/* Buttons to control stopwatch */}
      <div className="buttons">
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
