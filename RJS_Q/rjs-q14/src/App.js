// App.js
import React from "react";
import Stopwatch from "./components/Stopwatch"; // Import the Stopwatch component
import "./App.css"; // Import global styles
const App = () => {
  return (
    <div className="app-container">
      <h1>React Stopwatch</h1>
      {/* Render the stopwatch */}
      <Stopwatch />
    </div>
  );
};

export default App;
