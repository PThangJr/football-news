import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  _limit: 20,
  _page: 1,
};
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state._page = action.payload;
    },
  },
});

const { actions, reducer } = newsSlice;
export const { changePage } = actions;
export default reducer;
