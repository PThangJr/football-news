import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
const Pagination = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const total = useSelector((state) => state.dataNews).total;
  const limitNew = useSelector((state) => state.limitNew);
  const page = Math.ceil(total / limitNew);
  // console.log(page);
  // let listPageCurrent = listPageCurrent + 5 < page ? listPageCurrent + 5 : page;
  let currentPage = queryString.parse(location.search, { parseNumbers: true })._page || 1;
  //State
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(5);

  useEffect(() => {
    let pageItems = document.querySelectorAll('.page-item');
    if (pageItems.length <= 1) return;
    for (let i = 0; i < pageItems.length; i++) {
      pageItems[i].classList.remove('page-item--active');
    }
    for (let i = 0; i < pageItems.length; i++) {
      const activePage = parseInt(pageItems[i].textContent);
      if (activePage === currentPage) {
        pageItems[i].classList.add('page-item--active');
      }
    }
    if (currentPage >= 1 && currentPage < 5) {
      setStartPage(0);
      setEndPage(5);
    } else if (currentPage >= 5 && currentPage <= page - 4) {
      setStartPage(currentPage - 2);
      setEndPage(currentPage + 3);
      console.log('hey');
    } else if (currentPage > page - 4) {
      setStartPage(page - 5);
      setEndPage(page);
      console.log('next');
    } else {
      for (let i = 0; i < pageItems.length; i++) {
        pageItems[i].classList.remove('page-item--active');
      }
      pageItems[0].classList.add('page-item--active');
    }
  }, [page, currentPage, startPage, endPage]);

  const renderPage = () => {
    let arr = [];
    for (let i = 1; i <= page; i++) {
      arr.push(i);
    }
    if (currentPage >= 5) {
    }
    // console.log(startPage, endPage);

    arr = arr.slice(startPage, endPage);
    return arr.map((item, index) => (
      <li className={'page-item'} key={item}>
        <Link to={`${pathname}?_page=${item}`} className={`page-item__link`}>
          {item}
        </Link>
      </li>
    ));
  };

  return (
    <div className="pagination">
      <ul className="page-list">
        <p className="btn-icon btn-icon--prev" disabled={currentPage <= 1}>
          <Link
            to={currentPage > 1 ? `?_page=${currentPage - 1}` : `?_page=${currentPage}`}
            className={currentPage > 1 ? 'btn-icon__link ' : 'btn-icon__link btn-icon__link--disabled'}
          >
            <i className="fas fa-chevron-left"></i>
          </Link>
        </p>
        {renderPage()}

        <p className="btn-icon btn-icon--next">
          <Link
            to={currentPage <= page - 1 ? `?_page=${currentPage + 1}` : `?_page=${currentPage}`}
            className={currentPage < page ? 'btn-icon__link ' : 'btn-icon__link btn-icon__link--disabled'}
          >
            <i className="fas fa-chevron-right"></i>
          </Link>
        </p>
      </ul>
    </div>
  );
};

Pagination.propTypes = {};

export default Pagination;
