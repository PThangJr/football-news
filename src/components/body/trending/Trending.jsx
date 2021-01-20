import React from 'react';
import Result from './Result';
import TrendingSlide from './TrendingSlide';

const Trending = (props) => {
  return (
    <div className="main-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-12">
            <TrendingSlide />
          </div>
          <div className="col-xl-4 col-lg-4 col-12">
            <Result />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
