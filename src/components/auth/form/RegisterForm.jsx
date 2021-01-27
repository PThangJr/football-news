import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { fetchRegister } from '../../../app/store/Slice/Auth/authSlice';
import { changeDisplayAuth } from '../../../app/store/Slice/Auth/displayAuthSlice';
import CheckBoxControl from '../../form/form-control/CheckBoxControl';
import FormControl from '../../form/form-control/FormControl';
import LoadingLinear from '../../loading/LoadingLinear';

const RegisterForm = (props) => {
  const dispatch = useDispatch();
  const handleChangeFormAuth = () => {
    const options = {
      isAuth: true,
      isLogin: true,
      isRegister: false,
    };
    dispatch(changeDisplayAuth(options));
  };
  const handleCloseFormAuth = () => {
    dispatch(changeDisplayAuth({ isAuth: false }));
  };
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
    email: yup.string().required('Email không được để trống!').email('Email không hợp lệ!'),
    rePassword: yup
      .string()
      .required('RePassword không được để trống!')
      .oneOf([yup.ref('password')], 'RePassword không trùng khớp!'),
    isConfirmRule: yup.boolean().required(),
  });
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
      rePassword: '',
      isConfirmRule: false,
    },
    resolver: yupResolver(schema),
  });
  // const auth = useSelector((state) => state.auth);
  const [messageError, setMessageError] = useState({
    error: [],
  });
  const { isSubmitting } = form.formState;
  const handleRegisterSubmit = async (values) => {
    console.log(values);
    try {
      const userDispatch = await dispatch(fetchRegister(values));
      const user = unwrapResult(userDispatch);
      // console.log(user);
    } catch (error) {
      // console.log(error.message);
      setMessageError({
        error: error.message,
      });
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleRegisterSubmit)} className="auth__box-register rotate-y-180">
      {isSubmitting && <LoadingLinear />}
      <div className="auth__header">
        <h3 className="auth__heading">Đăng ký</h3>
        <button onClick={handleChangeFormAuth} type="button" className="btn btn--auth btn--login">
          Đăng nhập
        </button>
      </div>
      <div className="auth__form auth__form--register">
        <FormControl message={messageError.error[0]} form={form} type="text" placeholder="Username" name="username" />
        <FormControl message={messageError.error[1]} form={form} type="email" placeholder="Email" name="email" />
        <FormControl form={form} type="password" placeholder="Password" name="password" />
        <FormControl form={form} type="password" placeholder="Re-Password" name="rePassword" />
      </div>
      <div className="auth__rules">
        <div className="form-check">
          {/* <input className="checkbox" type="checkbox" /> */}
          <CheckBoxControl name="isConfirmRule" form={form} />
          {/* <CheckBoxControl form={form} type="checkbox" name="isConfirmRule" cName="checkbox" /> */}
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
        <button
          disabled={isSubmitting}
          type="submit"
          className={
            isSubmitting
              ? 'btn btn--orange btn--submit btn--full-wd btn--disabled'
              : 'btn btn--orange btn--submit btn--full-wd'
          }
        >
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
