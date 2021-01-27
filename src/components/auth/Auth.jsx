import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDisplayAuth } from '../../app/store/Slice/Auth/displayAuthSlice';
import LoginForm from './form/LoginForm';
import RegisterForm from './form/RegisterForm';
const Auth = () => {
  const displayAuth = useSelector((state) => state.displayAuth);
  const { isAuth, isLogin, isRegister } = displayAuth;
  const dispatch = useDispatch();
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      dispatch(changeDisplayAuth({ isAuth: false }));
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

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
