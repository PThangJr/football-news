import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import NewsContainer from './container/NewsContainer';
import * as URL from '../../../constants/urlContant';

const News = (props) => {
  const match = useRouteMatch();
  const displayHeading = () => {
    switch (match.path) {
      case '/':
        return 'News';
      case `/${URL.PREMIER_LEAGUE}`:
        return 'Premier League';
      case `/${URL.LA_LIGA}`:
        return 'La Liga';
      case `/${URL.SERIE_A}`:
        return 'Serie A';
      case `/${URL.LIGUE_1}`:
        return 'Ligue 1';
      case `/${URL.BUNDESLIGA}`:
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
          <NewsContainer />
        </div>
      </div>
      <div className="pagination">
        <NavLink to={`?_page=2`}>2</NavLink>
        {/* <button onClick={() => movePage(2)}>2</button> */}
      </div>
    </div>
  );
};

export default News;
