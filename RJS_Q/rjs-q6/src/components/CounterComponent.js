import React, { useState } from "react";
const CounterComponent = () => {
  // Step 1: useState hook to initialize count at 0
  const [count, setCount] = useState(0);
  // Step 2: Function to increment count
  const handleIncrement = () => {
    // Step 3: Use functional update to ensure latest state is used
    setCount((prevCount) => prevCount + 1);
  };
  // Step 4: Function to reset count
  const handleReset = () => {
    setCount(0); // Reset count back to 0
  };
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {/* Step 5: Display current count */}
      <h2>Count: {count}</h2>
      {/* Button to increment the counter */}
      <button onClick={handleIncrement}>Increment</button>

      {/* Button to reset the counter */}
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
};

export default CounterComponent;
