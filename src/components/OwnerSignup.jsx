import React, { useState } from "react";
import "../Login.css";

import { useNavigate } from "react-router-dom";

function OwnerSignup() {
  const [shopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Shop: ${shopName}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-container">
      <h2>ShopSaver - Seller Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter shop name"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter shop email"
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
        <button type="submit">Register</button>
      </form>

      {/* Already have account link */}
      <p style={{ marginTop: "10px" }}>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/owner-login")}
          style={{ color: "#007bff", cursor: "pointer" }}
        >
          Login
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

export default OwnerSignup;
