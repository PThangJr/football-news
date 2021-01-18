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
      try {
        await dispatch(fetchTrending({ _limit: 5 }));
        carousel();
      } catch (error) {}
    };
    render();
  }, [dispatch]);
  const trending = useSelector((state) => state.trending);
  const { data, status } = trending;
  const fallBackImage = (e) => {
    if (e) {
      e.target.src = 'http://placehold.it/820x400';
    }
  };
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
