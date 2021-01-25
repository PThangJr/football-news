import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from '../../../api/authAPI';
export const fetchRegister = createAsyncThunk('user/register', async (payload, thunkAPI) => {
  try {
    const data = await authAPI.register(payload);
    console.log(thunkAPI.getState);
    return data;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error.data);
  }
});

export const fetchLogin = createAsyncThunk('user/login', async (payload, { rejectWithValue }) => {
  try {
    const data = await authAPI.login(payload);
    console.log(data);
    return data;
  } catch (error) {
    return rejectWithValue(error.data);
  }
});

const initialState = {
  response: {},
  errors: {},
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRegister.fulfilled]: (state, action) => {
      console.log(action);
      state.response = action.payload;
    },
    [fetchRegister.rejected]: (state, action) => {
      console.log(action.payload.message);
      state.errors = action.payload;
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.response = action.payload;
    },
    [fetchLogin.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
