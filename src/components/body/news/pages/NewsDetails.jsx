import React, { useEffect } from 'react';
import parseHTML from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchNews } from '../../../../app/store/Slice/newsSlice';
import NewsDetailSkeleton from '../../../loading/skeletons/news-detail/NewsDetailSkeleton';
const NewsDetails = (props) => {
  // console.log('render...');
  const dispatch = useDispatch();

  const location = useLocation();
  const address = location.pathname.split('/');
  const newId = address[address.length - 1];
  // console.log(newId);
  useEffect(() => {
    const options = {
      tournament: `/${newId}`,
    };
    const fetchData = async () => {
      try {
        dispatch(fetchNews(options));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [newId]);
  const dataNewsFetch = useSelector((state) => state.dataNews);
  const { data, isLoading } = dataNewsFetch;
  const { description, content, created_at, views } = data;
  const renderNewDetail = () => {
    if (isLoading) {
      return <NewsDetailSkeleton />;
    } else {
      return (
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
      );
    }
  };
  return (
    <div className="detail">
      <div className="container-fluid">{renderNewDetail()}</div>
    </div>
  );
};

NewsDetails.propTypes = {};

export default NewsDetails;
