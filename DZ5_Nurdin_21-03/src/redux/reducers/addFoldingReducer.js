import { types } from "../types";

const initialState = {
  num: 0,
  sum: [],
};

export const addFoldingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NUM:
      return {
        ...state,
        num: +state.num + +action.payload,
        sum: [...state.sum, { newSum: +state.num }],
      };
    case types.ALL_CLEAR:
      return { sum: [], num: 0 };
    default:
      return state;
  }
};
