import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
const TrendingItem = (props) => {
  const { trendingData } = props;
  const { _id, thumbnail, title, description, topic } = trendingData;
  const match = useRouteMatch();
  let { url, path } = match;
  const fallBackImage = (e) => {
    if (e) {
      e.target.src = 'http://placehold.it/820x400';
    }
  };

  return (
    <li className={`trending-item `}>
      <NavLink to={`/detail-page${url}${_id}`} className="trending-link">
        <img onError={fallBackImage} className="trending-img" src={thumbnail} alt="" />
        <div className="trending__description">
          <h3 className="trending__title">{topic}</h3>
          <span className="trending__content">{description}</span>
        </div>
      </NavLink>
    </li>
  );
};

TrendingItem.propTypes = {
  trendingData: PropTypes.object,
};

export default TrendingItem;
