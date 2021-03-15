import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import newsAPI from '../../../api/newsAPI';
const initialState = {
  data: {},
  isLoading: null,
  errors: null,
};

export const fetchNewBySlug = createAsyncThunk('new-detail', async (payload, thunkAPI) => {
  try {
    const response = await newsAPI.getNewBySlug(payload);
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});
export const fetchLiked = createAsyncThunk('like-new', async (payload, thunkAPI) => {
  try {
    const response = await newsAPI.postLiked(payload);
    return response;
  } catch (error) {
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error);
  }
});

const newDetailSlice = createSlice({
  name: 'new-detail',
  initialState,
  reducers: {
    like(state, action) {
      console.log('like');
    },
  },
  extraReducers: {
    [fetchNewBySlug.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchNewBySlug.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.isLoading = false;
    },
    [fetchNewBySlug.rejected]: (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
    },
    [fetchLiked.pending]: (state, action) => {},
    [fetchLiked.fulfilled]: (state, action) => {
      state.data = action.payload.data;
    },
    [fetchLiked.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});

const { reducer, actions } = newDetailSlice;
export const { like } = actions;
export default reducer;
