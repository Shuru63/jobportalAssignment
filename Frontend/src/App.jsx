import { useState } from 'react';
import { useJobs } from './context/JobContext'; // Import the custom hook for job context
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import Header from './components/Header';
import AdminPanel from './pages/Admin';
import './index.css';

function App() {
  const { jobs, selectedJob, loading, error, searchJobs, selectJob } = useJobs();
  const [locationFilter, setLocationFilter] = useState('');
  const [showAdmin, setShowAdmin] = useState(false);
  const [job, setJob] = useState([]);

  // Handle job selection
  const handleJobSelect = (job) => {
    selectJob(job);
  };

  // Handle location search
  const handleLocationSearch = (location) => {
    setLocationFilter(location);
    searchJobs(location); // Search jobs based on the location filter
  };

  // Toggle admin panel
  const toggleAdmin = () => {
    setShowAdmin(!showAdmin);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onLocationSearch={handleLocationSearch} toggleAdmin={toggleAdmin} />
      
      {showAdmin ? (
        <AdminPanel jobs={jobs} setJobs={setJob} />
      ) : (
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 bg-white rounded-lg shadow overflow-hidden">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : error ? (
                <div className="p-4 text-red-500">Error: {error}</div>
              ) : (
                <JobList 
                  jobs={jobs} 
                  selectedJob={selectedJob} 
                  onJobSelect={handleJobSelect} 
                />
              )}
            </div>
            
            <div className="lg:col-span-2 bg-white rounded-lg shadow">
              {selectedJob ? (
                <JobDetails job={selectedJob} />
              ) : (
                <div className="p-6 text-center text-gray-500">
                  Select a job to view details
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
