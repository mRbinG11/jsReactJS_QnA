// components/FormComponent.js
import React, { useState } from "react";
const FormComponent = ({ onSubmit }) => {
  // Local state to manage input values
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  // Update local state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Handle form submit event
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default page reload
    onSubmit(form); // Send form data to parent via props
    setForm({ name: "", email: "", password: "" }); // Reset form fields
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      {/* Input for name */}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      {/* Input for email */}
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      {/* Input for password */}
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />

      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
