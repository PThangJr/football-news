import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrending } from '../../../app/store/Slice/trendingSlice';
import { carousel } from '../../../js/script';
import TrendingControl from './TrendingControl';
import TrendingItem from './TrendingItem';

const TrendingSlide = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const render = async () => {
      const options = {
        pagination: {
          _limit: 5,
        },
      };
      try {
        await dispatch(fetchTrending(options));
        carousel();
      } catch (error) {
        console.log(error);
      }
    };
    render();
  }, [dispatch]);
  const trending = useSelector((state) => state.trending);
  const { data } = trending;

  const renderTrendingItem = () => {
    return data.map((item, index) => {
      return <TrendingItem key={index} trendingData={item} />;
    });
  };
  const renderTrendingControl = () => {
    return data.map((item, index) => {
      return <TrendingControl key={index} thumbnail={item.thumbnail} />;
    });
  };
  return (
    <div className="trending">
      <ul className="trending-list">
        {renderTrendingItem()}

        <button className="trending__prev">
          <i className="icon-views fas fa-chevron-left" />
        </button>
        <button className="trending__next">
          <i className="icon-views fas fa-chevron-right" />
        </button>
      </ul>
      <ul className="trending-controls">{renderTrendingControl()}</ul>
    </div>
  );
};

export default TrendingSlide;
