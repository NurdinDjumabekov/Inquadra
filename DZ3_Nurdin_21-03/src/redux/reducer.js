const initialState = {
  number: 0,
};

export const reducer = (state = initialState, action) => {
  if (action.type === "COUNT_PLUS") {
    return { ...state, number: state.number + 1 };
  } else if (action.type === "COUNT_MINUS") {
    if (state.number === 0) {
      return state;
    } else {
      return { ...state, number: state.number - 1 };
    }
  } else if (action.type === "RESTART") {
    return { number: 0 };
  }
  return state;
};
