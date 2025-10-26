import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login.css";

function OwnerSignup() {
  const [owner, setOwner] = useState({
    shopName: "",
    ownerName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setOwner({ ...owner, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (owner.password !== owner.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Shop Registered Successfully!\nWelcome ${owner.ownerName}`);
  };

  return (
    <div className="login-container">
      <h2>Shop Owner Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="shopName"
          placeholder="Enter Shop Name"
          value={owner.shopName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Enter Owner Name"
          value={owner.ownerName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={owner.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={owner.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Enter Shop Address"
          value={owner.address}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={owner.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={owner.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register Shop</button>
      </form>

      <p className="signup-text">
        Already registered?{" "}
        <Link to="/owner-login" className="signup-link">
          Login here
        </Link>
      </p>
      <p className="signup-text">
        <Link to="/" className="signup-link">⬅ Back to Home</Link>
      </p>
    </div>
  );
}

export default OwnerSignup;
