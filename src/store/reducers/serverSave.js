import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteList: [], //// корзина
};

////// для хранения избарнных и корзины

const serverSave = createSlice({
  name: "serverSave",
  initialState,
  reducers: {
    /// добавление продукта в избранные
    addProdFavourite: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.favouriteList?.findIndex(
        (item) => item?.id === newItem?.id
      );

      if (existingItemIndex === -1) {
        // Если элемента нет в списке, добавляем его
        state.favouriteList = [...state.favouriteList, newItem];
      }
    },

    /// удаление продукта из избранных
    delProdFavourite: (state, action) => {
      const itemId = action.payload.id;
      state.favouriteList = state.favouriteList?.filter(
        (item) => item?.id !== itemId
      );
    },

    clearFavouriteList: (state, action) => {
      state.favouriteList = [];
    },
  },
});

export const { addProdFavourite, delProdFavourite, clearFavouriteList } =
  serverSave.actions;

export default serverSave.reducer;
