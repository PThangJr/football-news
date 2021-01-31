import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import newsAPI from '../../../api/newsAPI';
export const fetchNews = createAsyncThunk('news/getAll', async (payload, thunkAPI) => {
  // console.log(payload);
  try {
    const response = await newsAPI.getAll(payload);
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    data: [],
    isLoading: null,
    total: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchNews.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchNews.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.data = action.payload.data;
      state.isLoading = false;
      state.total = action.payload.total;
    },
    [fetchNews.rejected]: (state, action) => {
      state.data = action.payload;
      state.isLoading = true;
    },
  },
});

const { reducer } = newsSlice;

export default reducer;
