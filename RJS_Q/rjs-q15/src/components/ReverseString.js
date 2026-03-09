// ReverseString.js
import React, { useState } from "react";
const ReverseString = () => {
  // State to store the user’s input
  const [input, setInput] = useState("");
  // State to store the reversed version of the input
  const [reversed, setReversed] = useState("");
  // Handle input change and update the input state
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  // Handle button click: reverse the string and update the reversed state
  const handleReverse = () => {
    const reversedStr = input.split("").reverse().join(""); // Reverse logic
    setReversed(reversedStr); // Set the reversed output
  };
  return (
    <div className="reverse-container">
      {/* Input field for user to type a string */}
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter text"
      />
      {/* Button to trigger reversal */}
      <button onClick={handleReverse}>Reverse</button>

      {/* Conditionally show result only if reversed string exists */}
      {reversed && (
        <p className="result">
          <strong>Reversed:</strong> {reversed}
        </p>
      )}
    </div>
  );
};

export default ReverseString;
