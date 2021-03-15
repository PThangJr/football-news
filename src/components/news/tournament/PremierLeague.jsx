import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchNews } from '../../../../app/store/Slice/newsSlice';
import { fetchPremierLeague } from '../../../../app/store/Slice/premierLeagueSlice';
import NewsItem from '../components/NewsItem';
import NewsDetails from '../pages/NewsDetails';

const PremierLeague = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      tournament: '/premier-league',
      pagination: {},
    };
    dispatch(fetchNews(options));
  }, [dispatch]);

  const dataPremierLeague = useSelector((state) => state.dataNews).data;

  // console.log(dataNews)

  const mapDataPremierLeague = () => {
    if (dataPremierLeague) {
      return dataPremierLeague.map((item, index) => {
        return <NewsItem key={index} dataNew={item} />;
      });
    }
  };
  return (
    <div id="news-premier-league" className="news ">
      <div className="container-fluid">
        <h3 className="news__heading">Premier League</h3>
        <div className="row">
          {mapDataPremierLeague()}
          <Switch>
            <Route path={`/detail-page/:id`} component={NewsDetails} />
            {/* <Route path="/premier-league" exact component={NewsCardPage} /> */}
          </Switch>
        </div>
      </div>
    </div>
  );
};

PremierLeague.propTypes = {};

export default PremierLeague;
