import { useAuth } from "../context/AuthContext";

const ProfileCard = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h2 className="text-xl font-semibold">{user?.email}</h2>
      <p className="text-gray-600">User Profile</p>
    </div>
  );
};

export default ProfileCard;
