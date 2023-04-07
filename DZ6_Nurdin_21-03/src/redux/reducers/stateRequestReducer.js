import { types } from "../types";

const initialState = {
  stateStatus: false,
  // userName: "",
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
    // case types.NEW_NAME:
    //   return {
    //     ...state,
    //     // userName: action.payload,
    //   };
    default:
      return state;
  }
};
