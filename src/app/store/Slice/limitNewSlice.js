import { createSlice } from '@reduxjs/toolkit';

const initialState = 3;

const limitSlice = createSlice({
  name: 'limitNew',
  initialState,
});

const { reducer } = limitSlice;

export default reducer;
