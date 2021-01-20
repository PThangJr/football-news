import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../../../app/store/Slice/newsSlice';
import NewsItem from '../components/NewsItem';

const NewsContainer = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews({ _limit: 28, _page: 1 }));
  }, [dispatch]);
  const dataNewsFetch = useSelector((state) => state.dataNews);
  const mapDataNews = () => {
    if (Array.isArray(dataNewsFetch.data)) {
      if (dataNewsFetch.isLoading) {
        return <h2>Loading...</h2>;
      } else if (dataNewsFetch.isLoading === false) {
        return dataNews.map((item, index) => {
          return <NewsItem key={item._id} dataNew={item} />;
        });
      }
    }
  };
  const dataNews = dataNewsFetch.data;
  return <>{mapDataNews()}</>;
};

NewsContainer.propTypes = {};

export default NewsContainer;
