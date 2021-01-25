import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { fetchNews } from '../../../../app/store/Slice/newsSlice';
import NewsItem from '../components/NewsItem';

const NewsContainer = (props) => {
  const dispatch = useDispatch();
  const [now, setNow] = useState(0);
  const match = useRouteMatch();
  console.log(match.path);
  useEffect(() => {
    // setNow(new Date());
    const options = {
      tournament: match.path,
      pagination: {
        _limit: 28,
        _page: 1,
      },
    };
    dispatch(fetchNews(options));
  }, [match.path]);
  // console.log(now);
  // const date1 = new Date(2021, 1, 20);
  // const date2 = new Date(2021, 1, 19);
  // console.log((date1 - date2) / 1000 / 60 / 60);
  const dataNewsFetch = useSelector((state) => state.dataNews);
  console.log(dataNewsFetch);
  const mapDataNews = () => {
    if (Array.isArray(dataNewsFetch.data)) {
      if (dataNewsFetch.isLoading) {
        return <h2>Loading...</h2>;
      } else if (dataNewsFetch.isLoading === false) {
        return dataNews.map((item, index) => {
          return <NewsItem now={now} key={item._id} dataNew={item} />;
        });
      }
    }
  };
  const dataNews = dataNewsFetch.data;
  return <>{mapDataNews()}</>;
};

NewsContainer.propTypes = {};

export default NewsContainer;
