import { unwrapResult } from '@reduxjs/toolkit';
import qs from 'query-string';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom';
import Swal from 'sweetalert2';
import { fetchNews } from '../../../../app/store/Slice/newsSlice';
import NewItemSkeleton from '../../../loading/skeletons/news-item/NewsItemSkeleton';
import NewsItem from '../components/NewsItem';
const NewsContainer = (props) => {
  const total = useSelector((state) => state.dataNews).total;
  const limitNew = useSelector((state) => state.limitNew);
  const page = Math.ceil(total / 8) + 1;
  const renderPagination = () => {
    let arr = [];
    for (let i = 1; i < page; i++) {
      arr.push(i);
    }
    return arr.map((item, index) => {
      // return <Pagination page={item} key={index} />;
    });
  };
  // console.log('rendering..');
  const dispatch = useDispatch();
  const [now, setNow] = useState(0);
  const match = useRouteMatch();
  const location = useLocation();
  const params = qs.parse(location.search, { parseNumbers: true });
  // console.log(params);
  // console.log(match.path);
  let url = match.path.split('/');

  useEffect(() => {
    // setNow(new Date());
    const fetchDataNews = async () => {
      try {
        const options = {
          tournament: '/' + match.path.split('/')[match.path.split('/').length - 1],
          // tournament: '',
          pagination: {
            _limit: limitNew,
            _page: params._page,
          },
        };
        const action = await dispatch(fetchNews(options));
        const result = unwrapResult(action);
      } catch (error) {
        if (error === undefined) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Website bị lỗi. Vui lòng thử lại sau!!',
            // footer: '<a href>Why do I have this issue?</a>',
          });
        }
      }
    };
    fetchDataNews();
  }, [match.path, params._page]);
  // console.log(now);
  // const date1 = new Date(2021, 1, 20);
  // const date2 = new Date(2021, 1, 19);
  // console.log((date1 - date2) / 1000 / 60 / 60);
  const dataNewsFetch = useSelector((state) => state.dataNews);
  // console.log(dataNewsFetch);
  const { isLoading } = dataNewsFetch;
  const dataNews = dataNewsFetch.data;
  // console.log(dataNews);
  const mapDataNews = () => {
    if (Array.isArray(dataNewsFetch.data)) {
      if (isLoading) {
        let arr = [];
        for (let i = 0; i < 8; i++) {
          arr.push(i);
        }
        return arr.map((item, index) => {
          return <NewItemSkeleton key={index} />;
        });
      } else if (isLoading === false) {
        return dataNews.map((item, index) => {
          return <NewsItem now={now} key={item._id} dataNew={item} />;
        });
      }
    }
  };
  return <>{mapDataNews()}</>;
};

NewsContainer.propTypes = {};

export default NewsContainer;
