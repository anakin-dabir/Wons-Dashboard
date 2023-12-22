// /src/store/Store.jsx
// Thursday, December 21st 2023, 12:05 pm

import {configureStore, combineReducers} from '@reduxjs/toolkit';
import themeSlice from './slice/themeSlice';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authApi from '../services/authApi';
import authSlice from './slice/authSlice';

const rootReducer = combineReducers({
  theme: themeSlice,
  [authApi.reducerPath]: authApi.reducer,
  user: authSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authApi.middleware),
});

export const persistor = persistStore(store);

export default store;
