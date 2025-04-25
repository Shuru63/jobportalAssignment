import React from 'react';

const QualificationBadge = ({ text }) => {
  return (
    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-normal text-gray-700 mr-2 mb-2">
      {text}
    </span>
  );
};

export default QualificationBadge;