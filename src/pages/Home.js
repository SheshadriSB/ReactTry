import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container py-12">
        <h1 className="text-3xl font-semibold mb-8">Welcome to the Inclusive Employment Portal</h1>
        <p className="text-lg mb-8">
          Our platform connects differently-abled individuals with job opportunities that suit their skills and accessibility needs.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">For Job Seekers</h2>
            <p>Explore tailored job opportunities based on your skills and needs.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">For Employers</h2>
            <p>Post jobs and offer accessible working conditions to foster an inclusive workplace.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
