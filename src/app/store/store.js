import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import newsReducer from './Slice/newsSlice';
import trendingReducer from './Slice/trendingSlice';
import premierLeagueReducer from './Slice/premierLeagueSlice';
import displayAuthReducer from './Slice/Auth/displayAuthSlice';
import paginationReducer from './pagination/paginationSlice';
import authReducer from './Slice/Auth/authSlice';
import accountReducer from './Slice/Auth/accountSlice';
const rootReducer = {
  dataNews: newsReducer,
  pagination: paginationReducer,
  dataPremierLeague: premierLeagueReducer,
  trending: trendingReducer,
  auth: authReducer,
  displayAuth: displayAuthReducer,
  account: accountReducer,
};
const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware)
});
export default store;
