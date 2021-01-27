import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  isRegister: false,
  isLogin: false,
};
const displayAuthSlice = createSlice({
  name: 'formAuth',
  initialState,
  reducers: {
    changeDisplayAuth: (state, action) => {
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
const { actions, reducer } = displayAuthSlice;
export const { changeDisplayAuth } = actions;

export default reducer;
