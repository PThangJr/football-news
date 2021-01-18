import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFormAuth } from '../../../app/store/Slice/formAuthSlice';

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const handleChangeFormAuth = () => {
    const options = {
      isAuth: true,
      isLogin: false,
      isRegister: true,
    };
    dispatch(changeFormAuth(options));
  };
  const handleCloseFormAuth = () => {
    dispatch(changeFormAuth({ isAuth: false }));
  };
  return (
    <form className="auth__box-login">
      <div className="auth__header">
        <h3 className="auth__heading">Đăng nhập</h3>
        <button onClick={handleChangeFormAuth} type="button" className="btn btn--auth btn--register">
          Đăng ký
        </button>
      </div>
      <div className="auth__form">
        <input type="text" placeholder="Username/Email" name="username" className="auth__form-input" />
        <input type="password" placeholder="Password" name="password" className="auth__form-input" />
      </div>
      <div className="auth__support">
        <span className="auth__forgot-pass cl-danger">Quên mật khẩu?</span>
        <span className="auth__help">Trợ giúp</span>
      </div>
      <div className="auth__btn">
        <button type="submit" className="btn btn--green btn--submit btn--full-wd">
          Đăng nhập
        </button>
      </div>
      <span onClick={handleCloseFormAuth} className="icon-close">
        <i className="fas fa-times"></i>
      </span>
    </form>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
