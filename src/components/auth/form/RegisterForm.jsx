import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFormAuth } from '../../../app/store/Slice/formAuthSlice';
import FormGroup from '../../form/form-group/FormGroup';

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
      <div className="auth__form auth__form--register">
        <FormGroup
          message="Username không được để trống"
          status="error"
          type="text"
          placeholder="Username"
          name="username"
        />
        <FormGroup type="email" placeholder="Email" name="email" />
        <FormGroup type="password" placeholder="Password" name="password" />
        <FormGroup type="password" placeholder="Re-Password" name="re-password" />
      </div>
      <div className="auth__rules">
        <div className="form-check">
          <input className="checkbox" type="checkbox" />
          <span className="auth__rules-text">
            Tôi đồng ý với
            <a className="auth__rules-link" href="https://football-news-rule.com">
              Điều khoản dịch vụ
            </a>
            {/* <a className="auth__rules-link" href="#">
              Chính sách dịch vụ
            </a> */}
            <span>(*)</span>
          </span>
        </div>
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
