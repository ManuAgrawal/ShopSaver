import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./Login"; // Customer Login
import OwnerLogin from "./components/OwnerLogin"; // Seller Login
import UserSignup from "./components/UserSignup";
import OwnerSignup from "./components/OwnerSignup";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page with two buttons */}
        <Route path="/" element={<Home />} />

        {/* Customer routes */}
        <Route path="/user-login" element={<Login />} />
        <Route path="/user-signup" element={<UserSignup />} />

        {/* Seller routes */}
        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route path="/owner-signup" element={<OwnerSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
