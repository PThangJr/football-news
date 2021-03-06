import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { fetchLogin } from '../../../app/store/Slice/Auth/authSlice';
import { changeDisplayAuth } from '../../../app/store/Slice/Auth/displayAuthSlice';
import FormControl from '../../form/form-control/FormControl';
import LoadingLinear from '../../loading/LoadingLinear';

const LoginForm = (props) => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    username: yup
      .string()
      .trim()
      .required('Username không được để trống!')
      .min(4, 'Username không được ngắn hơn 4 ký tự')
      .max(12, 'Username không được dài hơn 12 ký tự'),
    password: yup
      .string()
      .required('Password không được để trống!')
      .min(6, 'Password nhập tối thiểu 6 ký tự!')
      .max(15, 'Password nhập tối đa 15 ký tự'),
  });
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const [messageError, setMessageError] = useState({});
  const { isAuth, isLogin, isRegister } = useSelector((state) => state.displayAuth);
  const handleLoginSubmit = async (values) => {
    try {
      // console.log(isSubmitting);
      const userDispatch = await dispatch(fetchLogin(values));
      const user = unwrapResult(userDispatch);
      if (isAuth) {
        dispatch(
          changeDisplayAuth({
            isAuth: false,
          })
        );
      }
    } catch (error) {
      console.log(error);
      setMessageError({
        error,
      });
    }
  };
  const { isSubmitting } = form.formState;
  const { clearErrors } = form;
  const handleChangeFormAuth = () => {
    const options = {
      isAuth: true,
      isLogin: false,
      isRegister: true,
    };
    dispatch(changeDisplayAuth(options));
    clearErrors();
  };
  const handleCloseFormAuth = () => {
    dispatch(changeDisplayAuth({ isAuth: false }));
  };
  return (
    <form onSubmit={form.handleSubmit(handleLoginSubmit)} className="auth__box-login">
      {isSubmitting && <LoadingLinear />}

      <div className="auth__header">
        <h3 className="auth__heading">Đăng nhập</h3>
        <button onClick={handleChangeFormAuth} type="button" className="btn btn--auth btn--register">
          Đăng ký
        </button>
      </div>
      <div className="auth__form auth__from--login">
        <FormControl message={messageError} form={form} type="text" placeholder="Username" name="username" />
        <FormControl message={messageError} form={form} type="password" placeholder="Password" name="password" />
        {/* <FormGroup status="success" message="" type="text" placeholder="Username/Email..." name="username" /> */}
        {/* <FormGroup status="error" message="Error" type="Password" placeholder="Password" name="password" /> */}
      </div>
      <div className="auth__support">
        <span className="auth__forgot-pass cl-danger">Quên mật khẩu?</span>
        <span className="auth__help">Trợ giúp</span>
      </div>
      <div className="auth__btn">
        <button
          type="submit"
          disabled={isSubmitting}
          className={
            isSubmitting
              ? `btn btn--green btn--submit btn--full-wd btn--disabled`
              : `btn btn--green btn--submit btn--full-wd `
          }
        >
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
