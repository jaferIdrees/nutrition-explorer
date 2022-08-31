import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './foodType/mainCategory';

const initialState = {};
const middleware = [thunk];
const appReducer = combineReducers({
  categoryReducer,
});

const bookStore = configureStore({
  reducer: appReducer,
  initialState,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middleware],
});

export default bookStore;
