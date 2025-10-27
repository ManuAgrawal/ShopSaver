import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import OwnerLogin from "./components/OwnerLogin";
import OwnerSignup from "./components/OwnerSignup";
import UserSignup from "./components/UserSignup";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard"; // ✅ important

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route path="/owner-signup" element={<OwnerSignup />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ ye hona chahiye */}
      </Routes>
    </Router>
  );
}

export default App;
