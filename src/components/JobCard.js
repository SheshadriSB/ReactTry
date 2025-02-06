import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location} • {job.type}</p>
      <Link to={`/jobs/${job.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
    </div>
  );
};

export default JobCard;
