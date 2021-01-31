import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from '../../../../api/authAPI';

export const fetchGetUser = createAsyncThunk('auth/information', async (payload, thunkAPI) => {
  try {
    const user = await authAPI.getUser();

    console.log(user);
    return user;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error.data);
  }
});
const getUserSlice = createSlice({
  name: 'get-user',
  initialState: {},
  extraReducers: {
    [fetchGetUser.fulfilled]: (state, action) => {
      console.log(action);
      state = action.payload;
    },
    [fetchGetUser.rejected]: (state, action) => {
      console.log(action);
      state = action.payload;
    },
  },
});

const { reducer } = getUserSlice;
export default reducer;
