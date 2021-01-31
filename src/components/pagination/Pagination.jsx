import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import { current } from '@reduxjs/toolkit';
const Pagination = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const total = useSelector((state) => state.dataNews).total;
  const limitNew = useSelector((state) => state.limitNew);
  const page = Math.ceil(total / limitNew) + 1;
  // let listPageCurrent = listPageCurrent + 5 < page ? listPageCurrent + 5 : page;
  console.log(page);
  let currentPage = queryString.parse(location.search, { parseNumbers: true })._page;
  useEffect(() => {
    // console.log(queryString.parse(location.search, { parseNumbers: true }));
    const pageItems = document.querySelectorAll('.page-item');
    console.log(pageItems);
    if (pageItems.length === 0) return;
    console.log(pageItems);
    pageItems[currentPage - 1].classList.add('page-item--active');
    if (currentPage < 6) {
    } else {
      console.log(pageItems[1]);
      // for (let i = 0; i < pageItems.length; i++) {
      //   pageItems[i].classList.remove('page-item--active');
      // }
      pageItems[0].classList.add('page-item--active');
    }
  }, [currentPage]);

  //State
  const [listPage, setlistPage] = useState(page);
  const [startPage, setStartPage] = useState(1);

  const renderPage = () => {
    let arr = [];
    for (let i = startPage; i < page; i++) {
      arr.push(i);
    }
    // return arr.map((item, index) => {
    //   return (
    //     <li onClick={(e) => handleChangePage(e, item)} key={item} className="page-item">
    //       {item}
    //     </li>
    //   );
    // });

    return arr.map((item, index) => (
      <li onClick={(e) => handleChangePage(e, item)} className={'page-item'} key={item}>
        <Link
          to={`${pathname}?_page=${item}`}
          className={`page-item__link`}
          // activeClassName="page-item__link--active"
        >
          {item}
        </Link>
      </li>
    ));
  };
  const handleChangePage = (e, item) => {
    if (item === listPage - 1 && listPage < 13) {
      // setlistPage(listPage + 2);
      // setStartPage(listPage - 3);
      // console.log(e.target);
      // e.target.parentElement.classList.add('page-item--active');
    }
    // else if (item === listPage )
    else {
      const pageItems = document.querySelectorAll('.page-item');
      for (let i = 0; i < pageItems.length; i++) {
        pageItems[i].classList.remove('page-item--active');
      }
      e.target.parentElement.classList.add('page-item--active');
    }
    // history.push({
    //   pathname: match.path,
    //   search: item === 1 ? '' : `?_page=${item}`,
    // });
  };
  return (
    <div className="pagination">
      <ul className="page-list">
        {renderPage()}
        {/* <li className="page-item">
          <p onClick={(e) => handleChangePage(e, -1)} className="page-item__link">
            ...
          </p>
        </li> */}
      </ul>
    </div>
  );
};

Pagination.propTypes = {};

export default Pagination;
