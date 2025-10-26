import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login.css";

function UserSignup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Account Created Successfully!\nWelcome ${user.name}`);
  };

  return (
    <div className="login-container">
      <h2>Create User Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      <p className="signup-text">
        Already have an account?{" "}
        <Link to="/user-login" className="signup-link">
          Login here
        </Link>
      </p>
      <p className="signup-text">
        <Link to="/" className="signup-link">⬅ Back to Home</Link>
      </p>
    </div>
  );
}

export default UserSignup;
