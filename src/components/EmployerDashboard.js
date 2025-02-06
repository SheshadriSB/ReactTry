// src/components/EmployerDashboard.js
import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const EmployerDashboard = ({ user }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("remote");
  const [accommodations, setAccommodations] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "jobs"), {
        title,
        description,
        location,
        jobType,
        accommodations,
        postedBy: user.uid,
        createdAt: new Date(),
      });
      setMessage("Job posted successfully!");
      // Clear form fields
      setTitle("");
      setDescription("");
      setLocation("");
      setJobType("remote");
      setAccommodations("");
    } catch (err) {
      setMessage("Error posting job: " + err.message);
    }
  };

  return (
    <div>
      <h2>Employer Dashboard</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title: </label>
          <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description: </label>
          <textarea required value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Location: </label>
          <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Job Type: </label>
          <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
            <option value="remote">Remote</option>
            <option value="on-site">On-Site</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div>
          <label>Accommodations (e.g., accessible workspace, flexible schedule): </label>
          <input type="text" required value={accommodations} onChange={(e) => setAccommodations(e.target.value)} />
        </div>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default EmployerDashboard;
