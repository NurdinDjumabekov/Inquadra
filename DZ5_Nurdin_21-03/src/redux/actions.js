import { types } from "./types";

export const plusAction = (input) => {
  return {
    type: types.ADD_NUM,
    payload: input,
  };
};
export const allClearAction = () => {
  return {
    type: types.ALL_CLEAR,
  };
};
