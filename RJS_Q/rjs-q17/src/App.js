// App.js
import React from "react";
import LoginForm from "./components/LoginForm"; // Import the LoginForm component
import "./App.css"; // Import global CSS styling
const App = () => {
  return (
    <div className="app-container">
      <h1>Login</h1>
      {/* Render the LoginForm inside the main app layout */}
      <LoginForm />
    </div>
  );
};

export default App;
