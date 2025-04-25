import React from 'react';
import QualificationBadge from './QualificationBadge';

const JobDetails = ({ job }) => {
  if (!job) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a job to view details
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
        <div className="flex items-center mt-2">
          {job.company && (
            <div className="mr-4">
              <span className="block text-sm font-medium text-gray-900">{job.company}</span>
            </div>
          )}
          {job.location && (
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {job.location}
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          {job.employmentType && (
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {job.employmentType}
            </div>
          )}
          
          {job.salary && (
            <div className="text-sm font-medium text-gray-900">
              <span>$ {job.salary}</span>
            </div>
          )}
        </div>

        {job.postedDate && (
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {job.postedDate} ago
          </div>
        )}
      </div>

      {job.qualifications && job.qualifications.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Qualifications</h3>
          <div className="flex flex-wrap">
            {job.qualifications.map((qualification, index) => (
              <QualificationBadge key={index} text={qualification} />
            ))}
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Full Job Description</h3>
        <div className="text-sm text-gray-700 space-y-2">
          <h4 className="font-medium">Role Description</h4>
          <p>{job.description}</p>
          
          {job.responsibilities && (
            <>
              <h4 className="font-medium pt-2">Responsibilities</h4>
              <ul className="list-disc pl-5">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul> 
            </>
          )}
        </div>
      </div>

      <div className="text-center">
        <button 
          className="w-3/4 bg-primary text-white font-medium py-2 px-4 rounded hover:bg-primary-light transition-colors"
          onClick={() => alert('Application submitted!')}
        >
          Quick Apply
        </button>
      </div>
    </div>
  );
};

export default JobDetails;