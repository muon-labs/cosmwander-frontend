import React from 'react';

const TinySpinner: React.FC = () => {
    return (<div className="flex justify-center items-center">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-300" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>)
}

export default TinySpinner