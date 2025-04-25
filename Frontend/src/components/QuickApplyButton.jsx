import React from 'react';

const QuickApplyButton = () => {
  return (
    <button
      className="bg-primary text-white text-sm font-medium px-3 py-1 rounded hover:bg-primary-light transition-colors"
      onClick={(e) => {
        e.stopPropagation();
        alert('Application submitted!');
      }}
    >
      Quick Apply
    </button>
  );
};

export default QuickApplyButton;