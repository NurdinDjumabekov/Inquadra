import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { changeTemporary, lookNumberConfFN, lookNumberFN } from "./stateSlice";
import axiosInstance from "../../axiosInstance";
import { changeToken } from "./saveDataSlice";
import { addProdFavourite, delProdFavourite } from "./serverSave";
const { REACT_APP_API_URL } = process.env;

///// getToken - get токен
export const getToken = createAsyncThunk(
  "getToken",
  async function (_, { dispatch, rejectWithValue }) {
    try {
      const response = await axiosInstance(`temp-user/login-or-register`);
      if (response.status >= 200 && response.status < 300) {
        if (response?.data?.token) {
          dispatch(changeToken(response?.data?.token));
        }
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// sendNumberFN - отправка номера
export const sendNumberFN = createAsyncThunk(
  "sendNumberFN",
  async function (num, { dispatch, rejectWithValue }) {
    const url = `${REACT_APP_API_URL}`;
    try {
      const response = await axiosInstance(url);
      if (response.status >= 200 && response.status < 300) {
        dispatch(lookNumberFN(false)); ////// закрываю модалку для ввода номера (логин)
        dispatch(lookNumberConfFN(true)); ////// открываю подтверждение номера
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// confirmNumberFN - отправка подтверждения номера
export const confirmNumberFN = createAsyncThunk(
  "confirmNumberFN",
  async function (props, { dispatch, rejectWithValue }) {
    const { clear, nums, numberUser } = props;
    // try {
    //   const response = await axios({
    //     method: "GET",
    //     url: `${REACT_APP_API_URL}`,
    //   });
    //   if (response.status >= 200 && response.status < 300) {
    //     dispatch(lookNumberConfFN(false)); ////// закрываю модалку
    //     clear();
    //   } else {
    //     throw Error(`Error: ${response.status}`);
    //   }
    // } catch (error) {
    //   return rejectWithValue(error.message);
    // }
  }
);

///// getListCateg - get список катег0рий //// check
export const getListCateg = createAsyncThunk(
  "getListCateg",
  async function (props, { dispatch, rejectWithValue }) {
    try {
      const response = await axiosInstance(`reference-data/categories`);
      if (response.status >= 200 && response.status < 300) {
        console.log(response?.data, " response?.data");
        // return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// getListBrands - get список плит (Напольная плитка, Декоративная  и т.д.)
export const getListBrands = createAsyncThunk(
  "getListBrands",
  async function (_, { dispatch, rejectWithValue }) {
    const url = `${REACT_APP_API_URL}reference-data/brands`;
    try {
      const response = await axiosInstance(url);
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// getListCategs - get одежду
export const getListCategs = createAsyncThunk(
  "getListCategs",
  async function (id, { dispatch, rejectWithValue }) {
    const url = `${REACT_APP_API_URL}reference-data/brand-data?brandId=${id}`;
    try {
      const response = await axiosInstance(url);
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// detailedCloth - get каждую одежду
export const detailedCloth = createAsyncThunk(
  "detailedCloth",
  async function (id, { dispatch, rejectWithValue }) {
    const url = `${REACT_APP_API_URL}products/details/${id}`;
    try {
      const response = await axiosInstance(url);
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// getListProds - get одежду
export const getListProds = createAsyncThunk(
  "getListProds",
  async function (props, { dispatch, rejectWithValue }) {
    const url = `${REACT_APP_API_URL}products`;
    try {
      const response = await axiosInstance(url);
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// searchCloth -  посик одежды
export const searchCloth = createAsyncThunk(
  "searchCloth",
  async function (text, { dispatch, rejectWithValue }) {
    const url = `${REACT_APP_API_URL}products/search/${text}`;
    try {
      const response = await axiosInstance(url);
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// addFavourite - добавить с избранных товар
export const addFavourite = createAsyncThunk(
  "addFavourite",
  async function (data, { dispatch, rejectWithValue }) {
    const url = `${REACT_APP_API_URL}users/1/favorites`;

    try {
      const response = await axiosInstance.post(url, data);
      if (response.status >= 200 && response.status < 300) {
        dispatch(addProdFavourite({ data }));
        ///// добавляю в избранные локально
        dispatch(changeTemporary({ colorId: 0, sizeId: 0, count: 1, type: 0 }));
        ///// обнуляю state для временного хранения цвета и размера и типа размера
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// deleteFavourite -  удалить с избранных товар
export const deleteFavourite = createAsyncThunk(
  "deleteFavourite",
  async function (data, { dispatch, rejectWithValue }) {
    const url = `${REACT_APP_API_URL}users/1/favorites`;

    try {
      const response = await axiosInstance.post(url, data);
      if (response.status >= 200 && response.status < 300) {
        dispatch(delProdFavourite(data));
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// getListFavourite - get список избранных
export const getListFavourite = createAsyncThunk(
  "getListFavourite",
  async function (token, { dispatch, rejectWithValue }) {
    const url = `${REACT_APP_API_URL}users/1/favorites`;
    try {
      const response = await axiosInstance(url);
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

///// getListhistory - get список избранных
export const getListhistory = createAsyncThunk(
  "getListhistory",
  async function (_, { dispatch, rejectWithValue }) {
    const url = `${REACT_APP_API_URL}view-history`;

    try {
      const response = await axiosInstance(url);
      if (response.status >= 200 && response.status < 300) {
        return response?.data;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  preloader: false,
  preloaderFavourite: false,
  preloaderBasket: false,

  //////////
  search: "",
  searchList: [], //// поиск одежды
  listCloth: [], /// для отображения списка
  listHistory: [], /// для отображения списка
  listBrands: [], // бренд
  categKladka: [], // кладки
  categStatus: [], // статус
  categCoating: [], // покрытие
  listSize: [], // размер
  listTexture: [], // текстура
  listColor: [], // цвета
  listPrice: [], // цена
  everyCloth: {},
};

const requestSlice = createSlice({
  name: "requestSlice",
  initialState,
  extraReducers: (builder) => {
    //////////////// sendNumberFN
    builder.addCase(sendNumberFN.fulfilled, (state, action) => {
      state.preloader = false;
    });
    builder.addCase(sendNumberFN.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(sendNumberFN.pending, (state, action) => {
      state.preloader = true;
    });

    ////////////////// confirmNumberFN
    builder.addCase(confirmNumberFN.fulfilled, (state, action) => {
      state.preloader = false;
    });
    builder.addCase(confirmNumberFN.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(confirmNumberFN.pending, (state, action) => {
      state.preloader = true;
    });

    /////////////////// getListBrands
    builder.addCase(getListBrands.fulfilled, (state, action) => {
      state.preloader = false;
      state.listBrands = action.payload;
    });
    builder.addCase(getListBrands.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getListBrands.pending, (state, action) => {
      state.preloader = true;
    });

    ///////////////// getListCateg
    builder.addCase(getListCateg.fulfilled, (state, action) => {
      state.preloader = false;
      state.categStatus = action.payload?.filter((i) => i.gender == 2);
      state.categKladka = action.payload?.filter((i) => i.gender == 1);
    });
    builder.addCase(getListCateg.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getListCateg.pending, (state, action) => {
      state.preloader = true;
    });

    //////////////// getListCategs
    builder.addCase(getListCategs.fulfilled, (state, action) => {
      state.preloader = false;

      const { masonryTypes, coatings, sizes } = action.payload;
      const { texture, colors, price } = action.payload;

      state.categKladka = masonryTypes; // кладки
      state.categStatus = []; // статус ////// chech
      state.categCoating = coatings; // покрытие
      state.listSize = sizes; // размер
      state.listTexture = texture; // текстура
      state.listColor = colors; // цвета
      state.listPrice = []; // цены ////// chech
    });

    builder.addCase(getListCategs.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getListCategs.pending, (state, action) => {
      state.preloader = true;
    });

    //////////////////// getListProds
    builder.addCase(getListProds.fulfilled, (state, action) => {
      state.preloader = false;
      state.listCloth = action.payload;
    });
    builder.addCase(getListProds.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
      // state.listCloth = [];
    });
    builder.addCase(getListProds.pending, (state, action) => {
      state.preloader = true;
    });

    /////////////////// detailedCloth
    builder.addCase(detailedCloth.fulfilled, (state, action) => {
      state.preloader = false;
      state.everyCloth = action.payload;
    });
    builder.addCase(detailedCloth.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(detailedCloth.pending, (state, action) => {
      state.preloader = true;
    });

    ////////////////////// getListhistory
    builder.addCase(getListhistory.fulfilled, (state, action) => {
      state.preloader = false;
      state.listHistory = action.payload;
    });
    builder.addCase(getListhistory.rejected, (state, action) => {
      state.error = action.payload;
      state.preloader = false;
    });
    builder.addCase(getListhistory.pending, (state, action) => {
      state.preloader = true;
    });
  },

  reducers: {
    everyClothFN: (state, action) => {
      state.everyCloth = action.payload;
    },

    searchFN: (state, action) => {
      state.search = action.payload;
      ///// для поиска  (input в меню)
    },

    searchListFN: (state, action) => {
      state.searchList = action.payload;
      ///// для поиска  (input в меню)
    },
  },
});
export const { everyClothFN, searchFN, searchListFN } = requestSlice.actions;

export default requestSlice.reducer;
