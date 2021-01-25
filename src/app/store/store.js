import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './Slice/newsSlice';
import trendingSlice from './Slice/trendingSlice';
import premierLeagueSlice from './Slice/premierLeagueSlice';
import formAuthSlice from './Slice/formAuthSlice';
import paginationSlice from './pagination/paginationSlice';
import authSlice from './Slice/authSlice';
const rootReducer = {
  dataNews: newsSlice,
  pagination: paginationSlice,
  dataPremierLeague: premierLeagueSlice,
  trending: trendingSlice,
  formAuth: formAuthSlice,
  auth: authSlice,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
