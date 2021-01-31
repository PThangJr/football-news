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
    isLoading: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTrending.pending]: (state, action) => {
      state.status = 'Loading';
      state.isLoading = true;
    },
    [fetchTrending.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.isLoading = false;
    },
    [fetchTrending.rejected]: (state, action) => {
      state.data = [];
      state.isLoading = false;
    },
  },
});

const { reducer } = trendingSlice;

export default reducer;
