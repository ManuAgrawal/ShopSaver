import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#333",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Welcome to ShopSaver 🛍️</h1>
      <p style={{ marginBottom: "30px", opacity: "0.8" }}>
        Choose your role to continue
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "12px 30px",
            borderRadius: "25px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Customer
        </button>
        <button
          onClick={() => navigate("/owner-login")}
          style={{
            padding: "12px 30px",
            borderRadius: "25px",
            border: "none",
            backgroundColor: "#28a745",
            color: "#fff",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Seller
        </button>
      </div>

      <p
        style={{
          position: "absolute",
          bottom: "20px",
          fontSize: "0.9rem",
          opacity: "0.7",
        }}
      >
        © 2025 ShopSaver — All rights reserved.
      </p>
    </div>
  );
}

export default Home;
