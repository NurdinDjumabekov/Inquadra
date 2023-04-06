import { combineReducers } from "redux";
import { stateRequestReducer } from "./reducers/stateRequestReducer";
export const rootReducer = combineReducers({
  stateRequestReducer,
});
