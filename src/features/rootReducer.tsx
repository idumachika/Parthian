// rootReducer.js
import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import userSlice from './userSlice'; // Import your userSlice]
import transferSlice from './transferSlice';

const rootReducer = combineReducers({
  user: userSlice,
  auth: authSlice,
  transfer: transferSlice,
  // Other slices can be added here
});

export default rootReducer;
