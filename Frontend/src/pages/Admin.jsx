import React, { useState } from 'react';
import { createJob } from '../services/api';
const AdminPanel = ({ jobs, setJobs }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    min_exp: '',
    max_exp: '',
    employment_type: 'Full-time',
    seniority_level: 'Entry level',
    job_link: '',
    company_url: '',
    source: 'direct',
    country: '',
    companytype: 'medium'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("hello baby")
      const newJob = {
        "Job ID (Numeric)": Date.now().toString(), // Generate a unique ID
        ...formData,
      };
     console.log("hello baby***********************")
      // Use the createJob function from the API service
      const savedJob = await createJob(newJob);
      console.log(savedJob)
      // Update the local state with the newly created job
      setJobs([savedJob, ...jobs]);
  
      alert('Job posting created successfully!');
  
      // Reset form data after successful submission
      setFormData({
        title: '',
        company: '',
        location: '',
        description: '',
        min_exp: '',
        max_exp: '',
        employment_type: 'Full-time',
        seniority_level: 'Entry level',
        job_link: '',
        company_url: '',
        source: 'direct',
        country: '',
        companytype: 'medium',
      });
    } catch (error) {
      console.error('Error creating job:', error);
      alert('Failed to create job: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6">Create New Job Posting</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black text-black"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Min Experience (in years)</label>
              <input
                type="number"
                name="min_exp"
                value={formData.min_exp}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Max Experience (in years)</label>
              <input
                type="number"
                name="max_exp"
                value={formData.max_exp}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Employment Type</label>
              <select
                name="employment_type"
                value={formData.employment_type}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Temporary</option>
                <option>Internship</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Seniority Level</label>
              <select
                name="seniority_level"
                value={formData.seniority_level}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              >
                <option>Entry level</option>
                <option>Mid-Senior level</option>
                <option>Senior level</option>
                <option>Executive</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Source</label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              >
                <option value="direct">Direct</option>
                <option value="linkedin">LinkedIn</option>
                <option value="indeed">Indeed</option>
                <option value="glassdoor">Glassdoor</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Type</label>
              <select
                name="companytype"
                value={formData.companytype}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Job Link</label>
              <input
                type="url"
                name="job_link"
                value={formData.job_link}
                onChange={handleChange}
                placeholder="https://example.com/job/123"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Company URL</label>
              <input
                type="url"
                name="company_url"
                value={formData.company_url}
                onChange={handleChange}
                placeholder="https://example.com"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              />
            </div>
            
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Job Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
                required
              ></textarea>
            </div>
          </div>
          
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Job Posting
            </button>
          </div>
        </form>
      </div>
      
      {jobs.length > 0 && (
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6">Manage Job Listings ({jobs.length})</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jobs.map((job) => (
                  <tr key={job["Job ID (Numeric)"]}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{job.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-500">{job.company}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-500">{job.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        className="text-blue-600 hover:text-blue-900 mr-3"
                        onClick={() => {
                          // Edit functionality would go here
                          alert(`Edit functionality for job ${job["Job ID (Numeric)"]} will be implemented soon.`);
                        }}
                      >
                        Edit
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-900"
                        onClick={() => {
                          // Remove the job from the jobs array
                          setJobs(jobs.filter(j => j["Job ID (Numeric)"] !== job["Job ID (Numeric)"]));
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;