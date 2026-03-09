// LoginForm.js
import React, { useState } from "react";
const LoginForm = () => {
  // State to track form values for email and password
  const [form, setForm] = useState({ email: "", password: "" });
  // State to hold validation errors
  const [errors, setErrors] = useState({});
  // State to show success or failure message after submission
  const [message, setMessage] = useState("");
  // Handle change in input fields and update form state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Reset errors and message whenever user types
    setErrors({});
    setMessage("");
  };
  // Function to validate form input before submission
  const validate = () => {
    const newErrors = {};
    // Check if email is empty
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      // Basic email format validation
      newErrors.email = "Invalid email format.";
    }

    // Check if password is empty
    if (!form.password) {
      newErrors.password = "Password is required.";
    }

    return newErrors; // Return error object
  };
  // Handle form submit event
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation
    const validationErrors = validate();

    // If errors found, show them and prevent submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Send POST request to mock API endpoint
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      // Check if the response is successful
      if (response.ok) {
        const data = await response.json();
        console.log("Login success:", data);

        // Reset form and show success message
        setMessage("Login successful!");
        setForm({ email: "", password: "" });
      } else {
        // Show error message on failed response
        setMessage("Login failed.");
      }
    } catch (error) {
      // Handle network errors
      console.error("Error:", error);
      setMessage("Network error.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {/* Show email error if exists */}
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {/* Show password error if exists */}
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit">Login</button>

      {/* Display submission message */}
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default LoginForm;
