import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {transferApi} from './transferApi';
import transferReducer from '../features/transferSlice';
import rootReducer from '../features/rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    [transferApi.reducerPath]: transferApi.reducer,
    persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      transferApi.middleware,
    ),

  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({serializableCheck: false}).concat(
  //     transferApi.middleware,
  //   ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
