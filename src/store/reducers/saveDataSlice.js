import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataUser: { haveBeen: false, chechAccount: false, token: "" },
};

const saveDataSlice = createSlice({
  name: "saveDataSlice",
  initialState,
  reducers: {
    changeDataUser: (state, action) => {
      state.dataUser = action.payload;
    },

    changeToken: (state, action) => {
      state.dataUser = { ...state.dataUser, token: action.payload };
    },
  },
});

export const { changeDataUser, changeToken } = saveDataSlice.actions;

export default saveDataSlice.reducer;
