import React, { useEffect } from 'react';
import parseHTML from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchNewById, fetchNews } from '../../../../app/store/Slice/newsSlice';
const NewsDetails = (props) => {
  const dispatch = useDispatch();

  const location = useLocation();
  const address = location.pathname.split('/');
  const newId = address[address.length - 1];
  useEffect(() => {
    const options = {
      tournament: `/${newId}`,
    };
    dispatch(fetchNews(options));
  }, []);
  const dataNewsFetch = useSelector((state) => state.dataNews);
  const { dataById } = dataNewsFetch;
  const { description, content, created_at, views } = dataById;
  return (
    <div className="detail">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12">
            <div className="detail-left">
              <div className="detail-header">
                <div className="detail-header-left">
                  <h3 className="detail__heading">{description}</h3>
                  <p className="detail__created">{created_at}</p>
                  <p className="detail-views">
                    <span>Views: </span>
                    <span>{views}</span>
                    <span>Likes: </span>
                    <span>4</span>
                  </p>
                </div>
                <div className="detail-header-right">
                  <button className="btn--likes">Like</button>
                </div>
              </div>
              <div className="detail-body">{parseHTML(content)}</div>
              <div className="detail-footer"></div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-12 col-md-12">
            <div className="detail-right">Adventisment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsDetails.propTypes = {};

export default NewsDetails;
