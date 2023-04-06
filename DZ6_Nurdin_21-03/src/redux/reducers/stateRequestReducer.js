import { types } from "../types";

const initialState = {
  stateStatus: false,
};

export const stateRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_STATUS:
      return {
        ...state,
        stateStatus: action.payload,
      };
    case types.REVERS_STATUS:
      return {
        ...state,
        stateStatus: false,
      };
    default:
      return state;
  }
};
