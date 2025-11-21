import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import "../styles/sidebar.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",  
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      alert("Signup successful!");
      navigate("/login");

    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="signup-wrapper d-flex min-vh-100 justify-content-center align-items-center py-5">

      <div className="signup-card p-4">
        <h3 className="my-font text-center mb-3 fw-bold text-primary">
          Create Account
        </h3>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control input-box"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="form-control input-box"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control input-box"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {/* ROLE DROPDOWN */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Role</label>
            <select
              name="role"
              className="form-control input-box"
              value={form.role}
              onChange={handleChange}
            >
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="btn submit-btn w-100">
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
}

export default Signup;
