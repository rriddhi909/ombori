import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="inner-circle"></div>
      <div className="outer-circle">
        <PuffLoader size={100} color="#d0e5a3" loading={true} />
      </div>
    </div>
  );
};

export default Loader;
