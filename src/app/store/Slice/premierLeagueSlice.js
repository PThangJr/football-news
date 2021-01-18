import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newsAPI from '../../../api/newsAPI';

export const fetchPremierLeague = createAsyncThunk('news/getPremierLeague', async (params, thunkAPI) => {
  const response = await newsAPI.getPremierLeague(params);
  return response;
});

const premierLeagueSlice = createSlice({
  name: 'news',
  initialState: {
    data: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPremierLeague.pending]: (state, action) => {
      state.status = 'Loading';
    },
    [fetchPremierLeague.fulfilled]: (state, action) => {
      state = {
        data: action.payload,
        status: 'Successfully!!',
      };

      return state;
    },
  },
});

const { actions, reducer } = premierLeagueSlice;

export default reducer;
