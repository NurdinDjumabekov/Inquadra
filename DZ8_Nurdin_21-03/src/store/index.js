import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const reducer = combineReducers({
  userSlice,
});
export const store = configureStore({
  reducer,
});
