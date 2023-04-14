import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  preloader: true,
};

export const usersOutput = createAsyncThunk(
  "usersOutput",
  async (userInfo, { dispatch }) => {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );
      // console.log(response.data);
      dispatch(usersinfo(response.data));
      dispatch(preloaderOff(false));
    } catch {
      console.log("error");
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    usersinfo: (state, action) => {
      state.users = action.payload;
    },
    preloaderOff: (state, action) => {
      state.preloader = action.payload;
    },
  },
});

export const { usersinfo, preloaderOff } = userSlice.actions;
export default userSlice.reducer;
