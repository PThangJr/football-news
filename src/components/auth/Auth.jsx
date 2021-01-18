import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFormAuth } from '../../app/store/Slice/formAuthSlice';
import LoginForm from './form/LoginForm';
import RegisterForm from './form/RegisterForm';

const Auth = () => {
  const formAuth = useSelector((state) => state.formAuth);
  const { isAuth, isLogin, isRegister } = formAuth;
  // console.log(formAuth);

  const handleStatusAuth = () => {
    if (isAuth) {
      if (isLogin) {
        return 'auth__box';
      } else if (isRegister) {
        return 'auth__box rotate-y-180';
      }
    }
  };
  return (
    <div className="auth">
      <div className="auth__overlay "></div>
      <div className="auth__flex">
        <div className={handleStatusAuth()}>
          <LoginForm />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;
