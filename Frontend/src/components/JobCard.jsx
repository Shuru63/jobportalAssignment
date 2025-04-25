import React from 'react';
import QuickApplyButton from './QuickApplyButton';

const JobCard = ({ job, isActive, onClick }) => {
  return (
    <div 
      className={`job-card ${isActive ? 'active' : ''}`}
      onClick={() => onClick(job)}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-gray-800">{job.title}</h3>
        {job.rating && (
          <div className="flex items-center text-sm">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{job.rating}</span>
          </div>
        )}
      </div>
      
      <div className="text-sm text-gray-600 mt-1">
        <span>{job.company}</span>
        {job.location && (
          <span className="ml-2">— {job.location}</span>
        )}
      </div>
      
      {job.description && (
        <p className="text-sm text-gray-700 mt-2 line-clamp-2">
          {job.description}
        </p>
      )}
      
      <div className="flex justify-between items-center mt-3">
        <div className="text-sm font-medium text-gray-900">
          {job.salary}
        </div>
        
        <QuickApplyButton />
      </div>
      
      {job.posted && (
        <div className="text-xs text-gray-500 mt-2 text-right">
          {job.posted}
        </div>
      )}
    </div>
  );
};

export default JobCard;