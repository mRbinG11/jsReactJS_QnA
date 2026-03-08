// pages/Home.js
// Import React
import React from "react";
const Home = () => {
  return (
    <div style={{ padding: "2rem" }}>
      {/* Title of the Home page */}
      <h1>Welcome to the Home Page</h1>
      {/* Description */}
      <p>
        This is the homepage content, loaded lazily only when you visit the root
        path!
      </p>
    </div>
  );
};

export default Home;
