import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const SidebarLeft = () => {
  useEffect(() => {
    // toggleSidebar();
  }, []);
  return (
    <aside className="sidebar">
      <h2 className="sidebar__heading">
        Menu
        <span className="icon-close">
          <i className="fas fa-times" />
        </span>
      </h2>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <NavLink to="/" exact activeClassName="sidebar__link--active" className="sidebar__link ">
            News
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/premier-league" activeClassName="sidebar__link--active" className="sidebar__link">
            Premier League
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/la-liga" activeClassName="sidebar__link--active" className="sidebar__link">
            La Liga
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/serie-a" activeClassName="sidebar__link--active" className="sidebar__link">
            Serie A
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/bundesliga" activeClassName="sidebar__link--active" className="sidebar__link">
            Bundesliga
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="ligue-1" activeClassName="sidebar__link--active" className="sidebar__link">
            Ligue 1
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="UEFA-champion-league" activeClassName="sidebar__link--active" className="sidebar__link ">
            UEFA Champion League
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/UEFA-europa-league" activeClassName="sidebar__link--active" className="sidebar__link">
            UEFA Europa League
          </NavLink>
        </li>
        {/* <li className="sidebar__item">
          <NavLink to="/" activeClassName="sidebar__link--active" className="sidebar__link">
            V-league
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/" activeClassName="sidebar__link--active" className="sidebar__link">
            Giải đấu khác
          </NavLink>
        </li> */}
      </ul>
    </aside>
  );
};

export default SidebarLeft;
