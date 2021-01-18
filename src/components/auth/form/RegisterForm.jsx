import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFormAuth } from '../../../app/store/Slice/formAuthSlice';

const RegisterForm = (props) => {
  const dispatch = useDispatch();
  const handleChangeFormAuth = () => {
    const options = {
      isAuth: true,
      isLogin: true,
      isRegister: false,
    };
    dispatch(changeFormAuth(options));
  };
  const handleCloseFormAuth = () => {
    dispatch(changeFormAuth({ isAuth: false }));
  };
  return (
    <form className="auth__box-register rotate-y-180">
      <div className="auth__header">
        <h3 className="auth__heading">Đăng ký</h3>
        <button onClick={handleChangeFormAuth} type="button" className="btn btn--auth btn--login">
          Đăng nhập
        </button>
      </div>
      <div className="auth__form">
        <input type="text" placeholder="Username" name="username" className="auth__form-input" />
        <input type="email" placeholder="Email" name="email" className="auth__form-input" />
        <input type="password" placeholder="Password" name="password" className="auth__form-input" />
        <input type="password" placeholder="Re-Password" name="re-password" className="auth__form-input" />
      </div>
      <div className="auth__support">
        <span className="auth__forgot-pass cl-danger">Quên mật khẩu?</span>
        <span className="auth__help">Trợ giúp</span>
      </div>
      <div className="auth__btn">
        <button type="submit" className="btn btn--orange btn--submit btn--full-wd">
          Đăng ký
        </button>
      </div>
      <span onClick={handleCloseFormAuth} className="icon-close">
        <i className="fas fa-times"></i>
      </span>
    </form>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
