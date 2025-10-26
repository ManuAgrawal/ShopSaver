import React from "react";
import { Link } from "react-router-dom";
import "../Login.css";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #74ABE2, #5563DE)",
        color: "white",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>🛍️ ShopSaver</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
        Your one-stop destination for smart shopping & selling
      </p>

      <div style={{ display: "flex", gap: "30px" }}>
        <Link to="/user-login">
          <button
            style={{
              backgroundColor: "#fff",
              color: "#5563DE",
              border: "none",
              padding: "15px 40px",
              borderRadius: "30px",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              transition: "transform 0.2s, background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.target.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.target.style.transform = "scale(1)")
            }
          >
            👤 Customer
          </button>
        </Link>

        <Link to="/owner-login">
          <button
            style={{
              backgroundColor: "#fff",
              color: "#5563DE",
              border: "none",
              padding: "15px 40px",
              borderRadius: "30px",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              transition: "transform 0.2s, background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.target.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.target.style.transform = "scale(1)")
            }
          >
            🏪 Seller
          </button>
        </Link>
      </div>

      <footer
        style={{
          position: "absolute",
          bottom: "20px",
          fontSize: "0.9rem",
          opacity: "0.8",
        }}
      >
        © {new Date().getFullYear()} ShopSaver — All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
