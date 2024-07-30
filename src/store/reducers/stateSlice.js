import { createSlice } from "@reduxjs/toolkit";

////// helpers
import { defaultInputsDecor } from "../../helpers/LodalData";

export const initialState = {
  alertText: { text: "", backColor: "", state: false },

  inputSearch: "", /// поиск товаров

  menuActive: "", /// главное меню

  numberUser: "+7", /// для ввода номера

  //////////////////////// categories all
  active: {
    kladka: [],
    status: [],
    coating: [],
    size: 0,
    texture: [],
    color: [],
  },

  activeBrands: 0, // активный бренд

  temporary: { colorId: 0, sizeId: 0, count: 1, type: 0 },
  //// для временного хранения размеров и цветов в списке

  activePrice: { min: 10, max: 12000 }, //// цена одежды диапозон

  initialPrice: { min: 0, max: 3000 }, //// цена одежды максимальный диапозон диапозон

  //////////////////////// modals
  lookFavorite: false, //// для просмотра ибранных

  lookBasket: false, //// для просмотра корзины

  lookSize: false, //// для просмотра размеров

  lookMenu: false, //// для просмотра menu

  lookNumber: false, ///// для модалки логина через номер

  lookNumberConf: false, ///// для модалки подтверждения номера

  inputsDecor: defaultInputsDecor, ////// для подтверждения заказа

  ////////////////////////////// для адаптивки
  menuAdaptive: { left: false, right: false }, //// для меню мобилки
};

const stateSlice = createSlice({
  name: "stateSlice",
  initialState,
  reducers: {
    changeInputSearch: (state, action) => {
      state.inputSearch = action.payload;
    },

    changeMenuActive: (state, action) => {
      state.menuActive = action.payload;
    },

    changeAlertText: (state, action) => {
      state.alertText = action.payload;
    },

    numberUserFN: (state, action) => {
      state.numberUser = action.payload;
    },

    lookFavoriteFN: (state, action) => {
      state.lookFavorite = action.payload;
    },

    lookBasketFN: (state, action) => {
      state.lookBasket = action.payload;
    },

    lookSizeFN: (state, action) => {
      state.lookSize = action.payload;
    },

    lookMenuFN: (state, action) => {
      state.lookMenu = action.payload;
    },

    lookNumberFN: (state, action) => {
      state.lookNumber = action.payload;
    },

    lookNumberConfFN: (state, action) => {
      state.lookNumberConf = action.payload;
    },

    activeBrandsFN: (state, action) => {
      state.activeBrands = action.payload;
    },

    //// для сортировки
    changeActive: (state, action) => {
      state.active = action.payload;
    },

    //// для временного хранения размеров и цветов
    changeTemporary: (state, action) => {
      state.temporary = action.payload;
    },

    activePriceFN: (state, action) => {
      state.activePrice = action.payload;
    },

    initialPriceFN: (state, action) => {
      state.initialPrice = action.payload;
    },

    changeInputsDecor: (state, action) => {
      state.inputsDecor = { ...state.inputsDecor, ...action.payload };
    },

    setError: (state, action) => {
      const { key, error } = action.payload;
      state.inputsDecor[key].error = error;
    },

    clearInputsDecor: (state, action) => {
      state.inputsDecor = defaultInputsDecor;
    },

    /////// для изначальной подставки все блоков для сортировки
    ////// присваиваю id каждой сортировки во временный state для того чтобы везде были галочки

    changeSortAllType: (state, action) => {
      const { masonryTypes, coatings } = action.payload;
      const { texture, colors } = action.payload;

      state.active = {
        ...state.active,
        coating: coatings?.map((item) => item.id), // покрытие
        color: colors?.map((item) => item.id), // покрытие
        kladka: masonryTypes?.map((item) => item.id), // кладки
        texture: texture?.map((item) => item.id), // текстура
      };
    },

    ///////////////////

    changeMenuAdaptive: (state, action) => {
      state.menuAdaptive = action.payload; //// для меню мобилки
    },
  },
});

export const {
  changeInputSearch,
  changeMenuActive,
  changeAlertText,
  numberUserFN,
  lookFavoriteFN,
  lookBasketFN,
  lookSizeFN,
  lookMenuFN,
  lookNumberFN,
  lookNumberConfFN,
  activeBrandsFN,
  changeActive,
  changeTemporary,
  activePriceFN,
  initialPriceFN,
  //////////////// inputs
  changeInputsDecor,
  setError,
  clearInputsDecor,
  /////// allCategs
  changeSortAllType,
  ///////////menuAdaptive
  changeMenuAdaptive,
} = stateSlice.actions;

export default stateSlice.reducer;
