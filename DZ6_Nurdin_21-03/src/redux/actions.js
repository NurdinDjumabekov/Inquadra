import axios from "axios";
import { types } from "./types";

export const changeStatusAction = (stateStatus) => {
  return {
    type: types.CHANGE_STATUS,
    payload: stateStatus,
  };
};

export const postUserAction = (
  inputName,
  inputSurName,
  inputEmail,
  inputWebsite
) => {
  return async (dispatch) => {
    try {
      const data = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: inputName,
          username: inputSurName,
          email: inputEmail,
          website: inputWebsite,
        }
      );
      console.log(data.data);
      //   console.log(data.status);
      if (data.status < 207) {
        dispatch(changeStatusAction(true));
      }
    } catch {
      dispatch(changeStatusAction(false));
    }
  };
};

const stopped = () => {
  return {
    type: types.REVERS_STATUS,
  };
};

// const createNewNameAction = () => {
//   return {
//     type: types.NEW_NAME,
//     // payload: inputName,
//   };
// };

export const stopViewAction = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(stopped());
      // dispatch(createNewNameAction());
    }, 5000);
  };
};
