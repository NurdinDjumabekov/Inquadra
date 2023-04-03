import { combineReducers } from "redux";
import { addFoldingReducer } from "./reducers/addFoldingReducer";
export const rootReducer = combineReducers({
  addFoldingReducer: addFoldingReducer,
});
