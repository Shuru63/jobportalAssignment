import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchJobs, searchJobsByLocation } from '../services/api';

// Create a context for jobs
const JobContext = createContext();

// Custom hook to use the job context
export const useJobs = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to load all jobs
  const loadJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const jobsData = await fetchJobs();
      setJobs(jobsData);
    } catch (err) {
      console.error('Failed to fetch jobs from API:', err);
      setError('Failed to fetch jobs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Function to search jobs by location
  const searchJobs = async (location) => {
    setLoading(true);
    setError(null);
    try {
      const jobsData = await searchJobsByLocation(location);
      setJobs(jobsData);
      setSelectedJob(null);
    } catch (err) {
      console.error('Failed to search jobs from API:', err);
      setError('Failed to search jobs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Function to select a specific job
  const selectJob = (job) => {
    setSelectedJob(job);
  };

  // Load jobs when component mounts
  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <JobContext.Provider value={{
      jobs,
      selectedJob,
      loading,
      error,
      searchJobs,
      selectJob,
      loadJobs
    }}>
      {children}
    </JobContext.Provider>
  );
};
