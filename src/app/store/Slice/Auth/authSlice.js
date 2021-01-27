import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from '../../../../api/authAPI';
import { toast } from 'react-toastify';

export const fetchRegister = createAsyncThunk('user/register', async (payload, thunkAPI) => {
  try {
    const data = await authAPI.register(payload);
    // console.log(thunkAPI.getState);

    return data;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error.data);
  }
});

export const fetchLogin = createAsyncThunk('user/login', async (payload, { rejectWithValue }) => {
  try {
    const data = await authAPI.login(payload);
    // console.log(data);
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('user', JSON.stringify(data.user));

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
      toast.success('Đăng ký thành cmn công!!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      state.response = action.payload;
      state.response = action.payload;
    },
    [fetchRegister.rejected]: (state, action) => {
      console.log(action.payload.message);
      state.errors = action.payload;
    },
    [fetchLogin.fulfilled]: (state, action) => {
      console.log(action);
      toast.success('Đăng nhập thành cmn công!!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      state.response = action.payload;
    },
    [fetchLogin.rejected]: (state, action) => {
      // console.log(action);
      state.errors = action.payload;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
