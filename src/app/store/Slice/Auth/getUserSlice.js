import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from '../../../../api/authAPI';

export const fetchGetUser = createAsyncThunk('auth/information', async (payload, thunkAPI) => {
  try {
    const user = await authAPI.getUser();
    return user;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error.data);
  }
});
const getUserSlice = createSlice({
  name: 'get-user',
  initialState: {
    user: {},
    errors: null,
  },
  extraReducers: {
    [fetchGetUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
    [fetchGetUser.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});

const { reducer } = getUserSlice;
export default reducer;
