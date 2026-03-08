// pages/About.js
// Import React
import React from "react";
const About = () => {
  return (
    <div style={{ padding: "2rem" }}>
      {/* Title of the About page */}
      <h1>About Us</h1>
      {/* Description */}
      <p>
        This About page is also lazily loaded only when you click
        &quot;About&quot; in the navbar!
      </p>
    </div>
  );
};

export default About;
