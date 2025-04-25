import React from 'react';
import { useJobs } from '../context/JobContext';
import JobCard from '../components/JobCard';
import JobDetails from '../components/JobDetails';
import LocationSearch from '../components/LocationSearch';

const Home = () => {
  const { jobs, selectedJob, loading, error, searchJobs, selectJob } = useJobs();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6">
          <h1 className="text-2xl font-bold text-gray-900">Job Listings</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6">
        <LocationSearch onSearch={searchJobs} />
        
        {error && (
          <div className="bg-red-50 p-4 rounded-md mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-1 overflow-auto max-h-screen">
            {loading ? (
              <div className="text-center py-6">Loading jobs...</div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-6">No jobs found</div>
            ) : (
              jobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  isActive={selectedJob && selectedJob.id === job.id}
                  onClick={selectJob}
                />
              ))
            )}
          </div>
          
          <div className="md:col-span-2 bg-white rounded-lg shadow-sm min-h-[600px]">
            <JobDetails job={selectedJob} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
