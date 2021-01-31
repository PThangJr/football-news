import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../../../app/store/Slice/newsSlice';

const UEFAChampionLeague = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      tournament: `/60001bbcfc13ae5fe70000c8`,
    };
    const fetchData = async () => {
      try {
        dispatch(fetchNews(options));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const data = useSelector((state) => state.dataNews);
  console.log(data);
  return (
    <div>
      <h1>UEFA Champion League</h1>
    </div>
  );
};

export default UEFAChampionLeague;
