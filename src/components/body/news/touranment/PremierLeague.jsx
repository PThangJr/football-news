import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import { fetchPremierLeague } from '../../../../app/store/Slice/premierLeagueSlice';
import NewsItem from '../components/NewsItem';
// import NewsCardPage from '../pages/NewsCardPage';
import NewsDetails from '../pages/NewsDetails';

const PremierLeague = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPremierLeague());
  }, []);

  const dataPremierLeague = useSelector((state) => state.dataPremierLeague).data;
  const dataNews = useSelector((state) => state.dataNews).data;

  // console.log(dataNews)
  // console.log(useSelector(state => state.dataPremierLeague))

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
        <a href="#" className="news__link">
          <h3 className="news__heading">Premier League</h3>
        </a>
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
