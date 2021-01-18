import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newsAPI from '../../../api/newsAPI';
export const fetchTrending = createAsyncThunk('trending/getAll', async (payload, thunkAPI) => {
  const response = await newsAPI.getAll(payload);
  return response;
});

const trendingSlice = createSlice({
  name: 'trending',
  initialState: {
    data: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTrending.pending]: (state, action) => {
      state.status = 'Loading';
    },
    [fetchTrending.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'Successfully';
    },
    [fetchTrending.rejected]: (state, action) => {
      state.data = [];
      state.status = 'Server loading fail...';
    },
  },
});

const { actions, reducer } = trendingSlice;

export default reducer;
