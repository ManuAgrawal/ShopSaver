import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (email && password) {
      alert("Login successful!");
      navigate("/customer-dashboard");
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="login-container">
      <h2>Customer Login</h2>
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

      {}
      <p className="signup-text">
        New user?{" "}
        <Link to="/user-signup" className="signup-link">
          Create an account
        </Link>
      </p>

      {}
      <Link to="/" className="back-home">
        ← Back to Home
      </Link>
    </div>
  );
}

export default Login;
