const initialState = {
  answer: 0,
};
export const reducer = (state = initialState, action) => {
  // const one = action.payload.numOne;
  // const two = action.payload.numTwo;
  if (action.type === "PLUS") {
    if (action.payload.numOne === "" || action.payload.numTwo === "") {
      return { answer: "Введите число!" };
    }
    return {
      ...state,
      answer: +action.payload.numOne + +action.payload.numTwo,
    };
  } else if (action.type === "MINUS") {
    if (action.payload.numOne === "" || action.payload.numTwo === "") {
      return { answer: "Введите число!" };
    }
    return {
      ...state,
      answer: +action.payload.numOne - +action.payload.numTwo,
    };
  } else if (action.type === "MULTIPLIED") {
    if (action.payload.numOne === "" || action.payload.numTwo === "") {
      return { answer: "Введите число!" };
    }
    return {
      ...state,
      answer: +action.payload.numOne * +action.payload.numTwo,
    };
  } else if (action.type === "DIVIDED") {
    if (action.payload.numOne === "" || action.payload.numTwo === "") {
      return { answer: "Введите число!" };
    }
    return {
      ...state,
      answer: (+action.payload.numOne / +action.payload.numTwo).toFixed(1),
    };
  }
  return state;
};
