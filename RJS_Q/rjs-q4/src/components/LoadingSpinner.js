// components/LoadingSpinner.js
// Import React
import React from "react";
const LoadingSpinner = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      {/* Message shown while the component is being lazily loaded */}
      <p>Loading…</p>
    </div>
  );
};

export default LoadingSpinner;
