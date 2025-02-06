// src/components/Profile.js
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const [fullName, setFullName] = useState("");
  const [skills, setSkills] = useState("");
  const [preferences, setPreferences] = useState("");
  const [accessibilityNeeds, setAccessibilityNeeds] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // If no user is logged in, redirect to login.
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      // Fetch existing profile (if any)
      const fetchProfile = async () => {
        const docRef = doc(db, "profiles", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFullName(data.fullName || "");
          setSkills(data.skills || "");
          setPreferences(data.preferences || "");
          setAccessibilityNeeds(data.accessibilityNeeds || "");
        }
      };
      fetchProfile();
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    try {
      await setDoc(doc(db, "profiles", user.uid), {
        fullName,
        skills,
        preferences,
        accessibilityNeeds,
      });
      setMessage("Profile saved successfully!");
    } catch (err) {
      setMessage("Error saving profile: " + err.message);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name: </label>
          <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div>
          <label>Skills: </label>
          <input type="text" required value={skills} onChange={(e) => setSkills(e.target.value)} />
        </div>
        <div>
          <label>Preferences: </label>
          <input type="text" required value={preferences} onChange={(e) => setPreferences(e.target.value)} />
        </div>
        <div>
          <label>Accessibility Needs: </label>
          <input type="text" required value={accessibilityNeeds} onChange={(e) => setAccessibilityNeeds(e.target.value)} />
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
