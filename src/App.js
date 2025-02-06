// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import JobListings from "./components/JobListings";
import EmployerDashboard from "./components/EmployerDashboard";
import AccessibilitySettings from "./components/AccessibilitySettings";

function App() {
  const [user, setUser] = useState(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<JobListings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/employer" element={<EmployerDashboard user={user} />} />
            <Route path="/accessibility" element={<AccessibilitySettings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
