import { createSlice } from '@reduxjs/toolkit';

const initialState = 16;

const limitSlice = createSlice({
  name: 'limitNew',
  initialState,
});

const { reducer } = limitSlice;

export default reducer;
