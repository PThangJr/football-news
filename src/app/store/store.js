import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import newsReducer from './Slice/newsSlice';
import trendingReducer from './Slice/trendingSlice';
import displayAuthReducer from './Slice/Auth/displayAuthSlice';
import paginationReducer from './pagination/paginationSlice';
import authReducer from './Slice/Auth/authSlice';
import accountReducer from './Slice/Auth/accountSlice';
import getUserReducer from './Slice/Auth/getUserSlice';
import limitNewReducer from './Slice/limitNewSlice';
import newBySlugReducer from './Slice/newDetailSlice';
const rootReducer = {
  dataNews: newsReducer,
  pagination: paginationReducer,
  trending: trendingReducer,
  auth: authReducer,
  displayAuth: displayAuthReducer,
  account: accountReducer,
  limitNew: limitNewReducer,
  user: getUserReducer,
  dataNewBySlug: newBySlugReducer,
  infoUser: getUserReducer,
};
const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware)
});
export default store;
