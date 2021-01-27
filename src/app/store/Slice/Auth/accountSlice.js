import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'accountSlice',
  initialState: -1,
  reducers: {
    changeAccount(state, action) {
      return (state = action.payload);
    },
  },
});
const { actions, reducer } = accountSlice;
export const { changeAccount } = actions;
export default reducer;
