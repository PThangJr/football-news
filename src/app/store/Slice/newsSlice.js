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
  },
  reducers: {},
  extraReducers: {
    [fetchNews.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchNews.rejected]: (state, action) => {
      state.data = action.payload;
      state.isLoading = true;
    },
  },
});

const { reducer } = newsSlice;

export default reducer;
