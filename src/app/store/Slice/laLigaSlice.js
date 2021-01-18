import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newsAPI from '../../../api/news';

export const fetchLaLiga = createAsyncThunk('news/getLaLiga', async (params, thunkAPI) => {
  const response = await newsAPI.getPremierLeague(params);
  return response;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    data: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchLaLiga.pending]: (state, action) => {
      state.status = 'Loading';
    },
    [fetchLaLiga.fulfilled]: (state, action) => {
      state = {
        data: action.payload,
        status: 'Successfully!!',
      };
      return state;
    },
  },
});

const { actions, reducer } = newsSlice;

export default reducer;
