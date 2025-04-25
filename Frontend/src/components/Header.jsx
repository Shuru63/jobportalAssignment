import React, { useState } from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon ,MapPinIcon} from '@heroicons/react/24/outline';

const Header = ({ onLocationSearch, toggleAdmin }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationSearch(location);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-xl font-bold text-blue-700">JobFinder</h1>
            <button 
              onClick={toggleAdmin}
              className="ml-4 text-sm text-gray-600 hover:text-blue-600"
            >
              Admin Panel
            </button>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPinIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Location: city, state, or zip"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:ring-blue-500 focus:border-blue-500 text-black"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center"
            >
              <MagnifyingGlassIcon className="h-5 w-5 mr-1" />
              <span>Search</span>
            </button>
            
            <button 
              type="button"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-md"
              title="Filter options"
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;