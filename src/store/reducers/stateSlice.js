import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alertText: { text: '', backColor: '', state: false },

  inputSearch: '', /// поиск товаров

  menuActive: '', /// главное меню

  numberUser: '+7', /// для ввода номера

  //////////////////////// categories all

  activeBrands: 0, // активный бренд

  active: {
    kladka: [],
    status: [],
    coating: [],
    size: 0,
    texture: [],
    color: [],
  },

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

  inputsDecor: {
    name: { text: '', error: false, errrText: 'необходимо заполнить' },
    firstName: { text: '', error: false, errrText: 'необходимо заполнить' },
    lastName: { text: '', error: false, errrText: 'необходимо заполнить' },
    num: {
      text: '',
      error: false,
      errrText: 'необходимо правильно заполнить номер',
    },
    email: { text: '', error: false, errrText: 'введите корректный email' },
    deliv: { text: '', error: false, errrText: 'необходимо заполнить' },
    deliv_home: { text: '', error: false, errrText: 'необходимо заполнить' },
    deliv_home_num: {
      text: '',
      error: false,
      errrText: 'необходимо заполнить',
    },
  },
};

const stateSlice = createSlice({
  name: 'stateSlice',
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
      state.inputsDecor = {
        ...state.inputsDecor,
        ...action.payload,
      };
    },

    setError: (state, action) => {
      const { key, error } = action.payload;
      state.inputsDecor[key].error = error;
    },

    clearInputsDecor: (state, action) => {
      state.inputsDecor = {
        name: '',
        firstName: '',
        lastName: '',
        num: '',
        email: '',
        deliv: '',
        deliv_home: '',
        deliv_home_num: '',
      };
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
} = stateSlice.actions;

export default stateSlice.reducer;
