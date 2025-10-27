import React, { useState } from "react";
import "../Login.css";

import { useNavigate } from "react-router-dom";

function UserSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Account Created!\nName: ${name}\nEmail: ${email}`);
    navigate("/login"); // Signup ke baad login page pe bhejta hai
  };

  return (
    <div className="login-container">
      <h2>Customer Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
      </form>

      {/* Links below form */}
      <p style={{ marginTop: "10px" }}>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          style={{ color: "#007bff", cursor: "pointer" }}
        >
          Login
        </span>
      </p>

      <p
        onClick={() => navigate("/")}
        style={{ color: "gray", cursor: "pointer", marginTop: "5px" }}
      >
        ← Back to Home
      </p>
    </div>
  );
}

export default UserSignup;
