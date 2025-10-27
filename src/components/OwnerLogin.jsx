import React, { useState } from "react";
import "../Login.css";

import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");

  };

  return (
    <div className="login-container">
      <h2>ShopSaver Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      {/* New user link */}
      <p style={{ marginTop: "10px" }}>
        New user?{" "}
        <span
          onClick={() => navigate("/user-signup")}
          style={{ color: "#007bff", cursor: "pointer" }}
        >
          Create account
        </span>
      </p>

      {/* Back to home link */}
      <p
        onClick={() => navigate("/")}
        style={{
          color: "gray",
          cursor: "pointer",
          marginTop: "5px",
          textDecoration: "underline",
        }}
      >
        ← Back to Home
      </p>
    </div>
  );
}

export default Login;
