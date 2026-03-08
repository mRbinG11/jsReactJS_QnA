// components/Navbar.js
// Import React
import React from "react";
// Import Link component for client-side routing
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f2f2f2" }}>
      {/* Link to Home page */}
      <Link to="/" style={{ marginRight: "1rem" }}>
        Home
      </Link>
      {/* Link to About page */}
      <Link to="/about">About</Link>
    </nav>
  );
};
