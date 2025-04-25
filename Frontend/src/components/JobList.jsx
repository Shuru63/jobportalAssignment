import React from 'react';
import { StarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/solid';

const JobList = ({ jobs, selectedJob, onJobSelect }) => {
  // Format hourly rate to display in the format shown in the UI
  const formatHourlyRate = (minRate, maxRate) => {
    if (minRate && maxRate) {
      return `$${minRate} - $${maxRate} an hour`;
    } else if (minRate) {
      return `$${minRate} an hour`;
    }
    return 'Rate not specified';
  };

  // Calculate days ago from posted date
  const getDaysAgo = (postedDate) => {
    if (!postedDate) return '';
    const posted = new Date(postedDate);
    const today = new Date();
    const diffTime = Math.abs(today - posted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays}d`;
  };

  return (
    <div className="job-list">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-800">Job Listings</h2>
      </div>

      <div className="divide-y divide-gray-200">
        {jobs.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No jobs found</div>
        ) : (
          jobs.map((job) => (
            <div
              key={job["Job ID (Numeric)"]}
              className={`p-4 cursor-pointer hover:bg-gray-50 ${
                selectedJob && selectedJob["Job ID (Numeric)"] === job["Job ID (Numeric)"]
                  ? 'bg-blue-50 border-l-4 border-blue-500'
                  : ''
              }`}
              onClick={() => onJobSelect(job)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-medium text-blue-600">{job.title}</h3>
                  <div className="flex items-center space-x-1 mt-1">
                    <p className="text-gray-600">{job.company}</p>
                    {job.seniority_level && (
                      <>
                        <span className="text-gray-400">—</span>
                        <p className="text-gray-600">{job.seniority_level}</p>
                      </>
                    )}
                  </div>
                </div>
                {job.rating && (
                  <div className="flex items-center text-yellow-400">
                    <span className="text-sm font-medium mr-1">{job.rating}</span>
                    <StarIcon className="h-4 w-4" />
                  </div>
                )}
              </div>

              <div className="mt-2">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span>{job.location}</span>
                </div>
              </div>

              <div className="mt-2 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span>{formatHourlyRate(job.min_exp, job.max_exp)}</span>
                </div>
                {job.postedDateTime && (
                  <div className="text-xs text-gray-400">
                    {getDaysAgo(job.postedDateTime)} ago
                  </div>
                )}
              </div>

              {job.employment_type && (
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {job.employment_type}
                  </span>
                </div>
              )}

              <div className="mt-3">
                <button 
                  className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-1 text-sm rounded-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(job.job_link, '_blank');
                  }}
                >
                  Quick Apply
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobList;