import React from 'react';
import '../../styles/Loader.css';

const Loader = ({ loaded }) => {
  return (
    <div className={`loader ${loaded ? 'loaded' : ''}`}>
      <div className="loader-content">
        <div className="spinner"></div>
        <h2>Loading Portfolio...</h2>
      </div>
    </div>
  );
};

export default Loader;
