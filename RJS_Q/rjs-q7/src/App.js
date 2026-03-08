// App.js
import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import "./App.css";
const App = () => {
  // Store list of submitted form data entries (optional for later use)
  const [formSubmissions, setFormSubmissions] = useState([]);
  // Function to handle form submission from child component
  const handleFormSubmit = (formData) => {
    console.log("Form Submitted: ", formData); // Log submitted data to console
    setFormSubmissions((prev) => [...prev, formData]); // Update local state (optional)
    console.log("Local State: ", formSubmissions);
  };
  return (
    <div className="app-container">
      <h1>User Login Form</h1>
      {/* Render the form and pass submit handler as prop */}
      <FormComponent onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
