import axios from 'axios';

// API URL for connecting to the backend
const API_URL = 'http://localhost:4000/api/jobs';


export const fetchJobs = async () => {
  try {
    const response = await axios.get(`${API_URL}/getjob`);
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};


export const fetchJobById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching job with id ${id}:`, error);
    throw error;
  }
};


export const createJob = async (jobData) => {
  try {
    console.log(jobData)
    const response = await axios.post(`${API_URL}/createjob`, jobData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating job:', error);
    throw error;
  }
};


export const updateJob = async (id, jobData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, jobData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating job with id ${id}:`, error);
    throw error;
  }
};


export const deleteJob = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting job with id ${id}:`, error);
    throw error;
  }
};


export const searchJobsByLocation = async (location) => {
  try {
        const jobs = await fetchJobs();

    if (!location) return jobs;

    return jobs.filter(job =>
      job.location && job.location.toLowerCase().includes(location.toLowerCase())
    );
  } catch (error) {
    console.error('Error searching jobs by location:', error);
    throw error;
  }
};

export const seedJobs = async (jobsData) => {
  try {
    const response = await axios.post(`${API_URL}/seed`, { jobs: jobsData }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error seeding jobs:', error);
    throw error;
  }
};
