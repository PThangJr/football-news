import PropTypes from 'prop-types';
import React from 'react';

const TrendingControl = (props) => {
  const { thumbnail } = props;
  const fallBackImage = (e) => {
    if (e) {
      e.target.src = 'http://placehold.it/50x50';
    }
  };
  return (
    <li className="trending-control">
      <img onError={fallBackImage} src={thumbnail} alt="" className="trending-control__img" />
    </li>
  );
};

TrendingControl.propTypes = {
  thumbnail: PropTypes.string,
};

export default TrendingControl;
