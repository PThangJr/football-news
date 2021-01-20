import React from 'react';
import { NavLink } from 'react-router-dom';
import NewsContainer from './container/NewsContainer';

const News = (props) => {
  return (
    <div id="news-top" className="news">
      <div className="container-fluid">
        <a href="abc" className="news__link">
          <h3 className="news__heading">News</h3>
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
