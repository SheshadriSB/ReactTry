import React, { useState } from 'react';

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [accessible, setAccessible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post job to Firebase or API
    console.log('Job Posted:', { jobTitle, jobDescription, accessible });
  };

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold mb-8">Post a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          placeholder="Job Description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="w-full p-3 border rounded-lg"
          required
        />
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={accessible}
              onChange={() => setAccessible(!accessible)}
              className="form-checkbox"
            />
            <span className="ml-2">Accessible Job</span>
          </label>
        </div>
        <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
