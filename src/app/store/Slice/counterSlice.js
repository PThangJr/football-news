import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase: (state, action) => {
      return (state = state + 1);
    },
    decrease: (state, action) => {
      state = state - 1;
    },
  },
});

const { actions, reducer } = newsSlice;
export const { increase, decrease } = actions;
export default reducer;
