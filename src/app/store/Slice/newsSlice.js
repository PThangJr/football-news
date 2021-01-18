import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newsAPI from '../../../api/newsAPI';
export const fetchNews = createAsyncThunk('news/getAll', async (payload, thunkAPI) => {
  const response = await newsAPI.getAll(payload);
  return response;
});

export const fetchNewById = createAsyncThunk('news/getNewById', async (payload, thunkAPI) => {
  const response = await newsAPI.getNewById(payload);
  return response;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    data: [],
    status: null,
    dataById: [],
  },
  reducers: {},
  extraReducers: {
    [fetchNews.pending]: (state, action) => {
      state.status = 'Loading';
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'Successfully';
    },
    [fetchNews.rejected]: (state, action) => {
      state.data = [];
      state.status = 'Server loading fail...';
    },
    [fetchNewById.pending]: (state, action) => {
      state.status = 'Loading';
    },
    [fetchNewById.fulfilled]: (state, action) => {
      state.dataById = action.payload;
      state.status = 'Successfully';
    },
  },
});

const { actions, reducer } = newsSlice;

export default reducer;
