import React, { useState } from 'react';

const LocationSearch = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };
  
  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Enter location..."
          className="px-4 py-2 border border-gray-300 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-primary text-black"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-r hover:bg-primary-light transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default LocationSearch;