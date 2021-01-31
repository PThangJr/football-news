import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import * as URL from '../../../constants/urlContant';
import Pagination from '../../pagination/Pagination';
import NewsContainer from './container/NewsContainer';

const News = (props) => {
  const match = useRouteMatch();

  const displayHeading = () => {
    switch (match.path) {
      case '/':
        return 'News';
      case `/news/${URL.PREMIER_LEAGUE}`:
        return 'Premier League';
      case `/news/${URL.LA_LIGA}`:
        return 'La Liga';
      case `/news/${URL.SERIE_A}`:
        return 'Serie A';
      case `/news/${URL.LIGUE_1}`:
        return 'Ligue 1';
      case `/news/${URL.BUNDESLIGA}`:
        return 'Bundesliga';
      default:
        return 'News';
    }
  };
  // console.log(match);
  return (
    <div id="news-top" className="news">
      <div className="container-fluid">
        <a href="abc" className="news__link">
          <h3 className="news__heading">{displayHeading()}</h3>
        </a>
        <div className="row">
          {/* <Switch>
            <Route path={`${match.path}`} children={<NewsContainer />} />
          </Switch> */}
          <NewsContainer />
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default News;
