import React from 'react';
const Preloader = ({ load }) => {
  return (
    load ? (
      <div className="preloader">
        <h2>Loading...</h2>
      </div>
    ) : null
  );
};
export default Preloader;
