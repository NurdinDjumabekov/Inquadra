import { createSlice } from "@reduxjs/toolkit";
import {
  addFavourite,
  deleteFavourite,
  getListBasket,
  getListFavourite,
} from "./requestSlice";
import { generateUniqueId } from "../../helpers/generateUniqueId";

const initialState = {
  favouriteList: [], //// избранные
  basketList: [], //// корзина
};

////// для хранения избарнных и корзины

const serverSaveSlice = createSlice({
  name: "serverSaveSlice",
  initialState,
  reducers: {
    ////////////////////////////////  избранные  ///////////////////////////////
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

    changeFavouriteList: (state, action) => {
      state.favouriteList = action.payload;
    },

    ////////////////////////////////  корзина  ///////////////////////////////

    /// добавление продуктов в корзину
    addProdBasket: (state, action) => {
      const newItem = action.payload;
      state.basketList = [
        ...state.basketList,
        // { ...newItem, count: 1, codeid: newItem?.codeid },
        { ...newItem, codeid: generateUniqueId() }, /// check
      ];
    },

    //// удаение с count(отнимаю по одному)
    removeProdBasket: (state, action) => {
      const { codeid } = action.payload; // Используем codeid для удаления

      //// delete
      // // Находим индекс элемента в корзине по codeid
      // const existingOrderIndex = state.basketList.findIndex(
      //   (obj) => obj?.codeid === codeid
      // );

      // if (existingOrderIndex !== -1) {
      //   // Получаем элемент корзины по найденному индексу
      //   const existingOrder = state.basketList[existingOrderIndex];

      //   if (existingOrder?.count > 0) {
      //     // Уменьшаем счетчик count на 1
      //     state.basketList[existingOrderIndex] = {
      //       ...existingOrder,
      //       count: existingOrder.count - 1,
      //     };

      //     // Если count стал равным 0, удаляем элемент из корзины
      //     if (existingOrder.count === 1) {
      //       // Фильтруем массив и удаляем элемент с соответствующим codeid
      //       state.basketList = state.basketList.filter(
      //         (item) => item?.codeid !== codeid
      //       );
      //     }
      //   }
      // }
    },

    //// прямое удаление, не считая count сразу удаляет
    deleteProdBasket: (state, action) => {
      const { codeid } = action.payload;
      state.basketList = state.basketList?.filter(
        (item) => item?.codeid !== codeid
      );
    },

    clearBasketList: (state, action) => {
      state.basketList = [];
    },

    changeBasketList: (state, action) => {
      state.basketList = action.payload;
    },
  },

  extraReducers: (builder) => {
    ///////////////////////////// избранные /////////////////////////////////////

    ////// getListFavourite
    builder.addCase(getListFavourite.fulfilled, (state, action) => {
      state.favouriteList = action.payload || [];
      /// получаю список с requestSlice
    });
    builder.addCase(getListFavourite.rejected, (state, action) => {
      state.error = action.payload;
      state.favouriteList = [];
      alert("Упс, не удалось загрузить данные(");
    });

    ////////////////// addFavourite
    builder.addCase(addFavourite.rejected, (state, action) => {
      state.error = action.payload;
      alert("Упс, не удалось добавить в избранные(");
    });

    ////////////////// deleteFavourite
    builder.addCase(deleteFavourite.rejected, (state, action) => {
      state.error = action.payload;
      alert("Упс, не удалось удалить с избранных(");
    });

    ///////////////////////////// корзина /////////////////////////////////////

    ////// getListBasket
    builder.addCase(getListBasket.fulfilled, (state, action) => {
      state.basketList = action.payload || [];
      /// получаю список с requestSlice
    });
    builder.addCase(getListBasket.rejected, (state, action) => {
      state.error = action.payload;
      state.basketList = [];
      alert("Упс, не удалось загрузить данные(");
    });
  },
});

export const {
  //////////// избранные
  addProdFavourite,
  delProdFavourite,
  clearFavouriteList,
  changeFavouriteList,
  //////////// корзина
  addProdBasket,
  removeProdBasket,
  deleteProdBasket,
  clearBasketList,
  changeBasketList,
} = serverSaveSlice.actions;

export default serverSaveSlice.reducer;
