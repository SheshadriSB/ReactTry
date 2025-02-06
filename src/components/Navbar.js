// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#f0f0f0" }}>
      <Link to="/">Job Listings</Link>
      {user ? (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/employer">Employer Dashboard</Link>
          <Link to="/accessibility">Accessibility</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/accessibility">Accessibility</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
