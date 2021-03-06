import React, { useEffect } from 'react';
import { darkMode, toggleSidebar } from '../../js/script';
import Account from './Account';
const Header = () => {
  useEffect(() => {
    toggleSidebar();
    darkMode();
  }, []);

  return (
    <header id="header" className="header">
      <nav className="navbar">
        <div className="navbar__menu">
          <span className="navbar__menu-icon">
            <i className="fas fa-bars" />
          </span>
          <span className="navbar__menu-icon">
            <i className="icon-views fas fa-search" />
          </span>
        </div>
        <div className="navbar__left">
          <div className="header__logo">
            <a href="/" className="header__logo-link">
              <img
                className="header__logo-img"
                src="data:image/jpeg;base64,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"
                alt="Football News"
              />
            </a>
          </div>
          <div className="search">
            <span className="icon--search">
              <i className="icon-views fas fa-search" />
            </span>
            <form className="form-search">
              <input type="text" className="search__value" name="search" placeholder="Tìm kiếm ....." />
            </form>
            <span className="icon--delete">
              <i className="icon-views fas fa-times" />
            </span>
          </div>
        </div>

        <div className="navbar__right ">
          <Account />
          <div className="dark-mode">
            <span className="dark-mode__box ">
              <i className="far fa-lightbulb icon-dark-mode" />
            </span>
            <span className="dark-mode__name">Dark Mode</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
