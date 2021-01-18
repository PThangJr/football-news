import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  isRegister: false,
  isLogin: false,
};
const formAuthSlice = createSlice({
  name: 'formAuth',
  initialState,
  reducers: {
    changeFormAuth: (state, action) => {
      // console.log(action);
      const { isAuth, isLogin, isRegister } = action.payload;
      const newState = {
        ...state,
        isAuth,
        isRegister,
        isLogin,
      };
      return newState;
    },
  },
});
const { actions, reducer } = formAuthSlice;
export const { changeFormAuth } = actions;

export default reducer;
