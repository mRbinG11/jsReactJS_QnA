// App.js
import React from "react";
import ReverseString from "./components/ReverseString"; // Import the ReverseString component
import "./App.css"; // Import CSS styling
const App = () => {
  return (
    <div className="app-container">
      <h1>Reverse a String</h1>
      {/* Render the ReverseString component */}
      <ReverseString />
    </div>
  );
};

export default App;
