import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login Success!\nEmail: ${email}`);
  };

  return (
    <div className="login-container">
      <h2>User Login</h2>
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

      <p className="signup-text">
        New user?{" "}
        <Link to="/user-signup" className="signup-link">
          Create Account
        </Link>
      </p>
      <p className="signup-text">
        <Link to="/" className="signup-link">⬅ Back to Home</Link>
      </p>
    </div>
  );
}

export default Login;
