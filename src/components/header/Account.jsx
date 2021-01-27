import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeAccount } from '../../app/store/Slice/Auth/accountSlice';
import { changeDisplayAuth } from '../../app/store/Slice/Auth/displayAuthSlice';
import HeaderSetting from './HeaderSetting';

const Account = (props) => {
  const dispatch = useDispatch();
  const accountDisplay = useSelector((state) => state.account);
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('access_token');
  useEffect(() => {
    if (token && user) {
      var status = user.role === -1 ? -1 : user.role === 0 ? 0 : user.role === 1 ? 1 : -1;
    } else {
      status = -1;
    }
    dispatch(changeAccount(status));
  }, [user, token]);
  const handleShowAuth = () => {
    dispatch(changeDisplayAuth({ isLogin: true, isAuth: true, isRegister: false }));
  };
  const handleLogout = () => {
    localStorage.clear();
    dispatch(changeAccount(-1));
  };
  const displayIcon = () => {
    if (accountDisplay === -1) {
      return (
        <span className="account__logo">
          <i className="icon-views fas fa-user" />
        </span>
      );
    } else if (accountDisplay === 1) {
      return (
        <span className="account__logo">
          <i className="fas fa-users-cog"></i>
        </span>
      );
    } else if (accountDisplay === 0) {
      return (
        <span className="account__logo">
          <i className="fas fa-user-shield"></i>
        </span>
      );
    }
  };
  const displayUserName = () => {
    if (accountDisplay >= 0) {
      const { username } = user;
      return username;
    }
    return 'Đăng nhập';
  };
  const displaySettingHeader = () => {
    if (accountDisplay === -1) {
      return (
        <div onClick={handleShowAuth} className="account">
          {displayIcon()}
          <button className="btn--default sign-in">{displayUserName()}</button>
        </div>
      );
    } else if (accountDisplay >= 0) {
      return (
        <div className={accountDisplay >= 0 ? 'account account--active' : 'account'}>
          {displayIcon()}
          <button className="btn--default sign-in">{displayUserName()}</button>
          <HeaderSetting accountDisplay={accountDisplay} handleLogout={handleLogout} />
        </div>
      );
    }
  };
  return <>{displaySettingHeader()}</>;
};

Account.propTypes = {};

export default Account;
