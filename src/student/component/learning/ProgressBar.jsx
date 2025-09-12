import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="learning-progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
