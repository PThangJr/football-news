import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const NewsItem = (props) => {
  const { dataNew } = props;
  const match = useRouteMatch();
  let { url } = match;
  if (url === '/') url = '';
  const { _id, title, description, likes, views, thumbnail } = dataNew;
  const fallBackImage = (e) => {
    if (e) {
      e.target.src = 'http://placehold.it/285x125';
    }
  };
  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
      <div className="card">
        <NavLink to={`/detail-page${url}/${_id}`} className="card-box">
          <div className="card__top">
            <div className="card__image">
              <h3 className="card__image-title">{title}</h3>
              <img src={thumbnail} onError={fallBackImage} alt="news1" className="card__img" />
            </div>
          </div>
          <div className="card__body">
            <div className="card__content">
              <p className="card__content-description">{description}</p>
            </div>
            <div className="card__views">
              <span className="card__views-post">
                <i className="icon-views fas fa-history" />
                2h
              </span>
              <span className="card__views-numb">
                <i className="icon-views fas fa-eye" />
                {views}
              </span>
              <span className="card__views-liked">
                <i className="icon-views fas fa-thumbs-up" />
                {likes.length}
              </span>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  dataNews: PropTypes.array,
};
NewsItem.defaultProps = {
  dataNews: [],
};

export default NewsItem;
