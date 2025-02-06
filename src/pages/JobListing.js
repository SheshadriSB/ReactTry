import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';

const JobListing = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job data from Firebase or API
    setJobs([
      { id: 1, title: 'Graphic Designer', location: 'Remote', accessible: true },
      { id: 2, title: 'Web Developer', location: 'On-site', accessible: false },
    ]);
  }, []);

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold mb-8">Job Listings</h1>
      <div className="grid gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobListing;
