import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();
  const [profileData, setProfileData] = useState({
    skills: '',
    preferences: '',
    accessibilityNeeds: '',
  });

  useEffect(() => {
    if (currentUser) {
      // Fetch profile data from Firebase or other storage
      setProfileData({
        skills: 'Graphic Design, Web Development',
        preferences: 'Remote Work, Flexible Hours',
        accessibilityNeeds: 'Voice Assistance, Large Text',
      });
    }
  }, [currentUser]);

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold mb-8">Profile</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Your Skills</h2>
        <p>{profileData.skills}</p>
        <h2 className="text-xl font-semibold mb-4 mt-6">Preferences</h2>
        <p>{profileData.preferences}</p>
        <h2 className="text-xl font-semibold mb-4 mt-6">Accessibility Needs</h2>
        <p>{profileData.accessibilityNeeds}</p>
      </div>
    </div>
  );
};

export default Profile;
