import woman from "../assets/noneData/Rectangle 996.png";
import woman2 from "../assets/noneData//Rectangle 996.png";
import colorBig from "../assets/noneData/bigMaterial.png";

export const listSorting = [
  { id: 1, name: "по доступным" },
  { id: 2, name: "по премиальным" },
  { id: 3, name: "по новым" },
  { id: 4, name: "по популярным" },
];

export const dataCatalog = [
  {
    id: 1,
    title: "Реализация",
    description: "Популярное со скидками до -70%, то что осталось на складах",
    img: woman,
  },
  {
    id: 2,
    title: "Бестселлер-коллекция",
    description: "Легендарное, то что в трендах, останется навечно с нами",
    img: woman,
  },
  {
    id: 3,
    title: "Нью-коллекция",
    description:
      "Новое, то что в хитах, останется ли оно, решать только тебе и твоим близким",
    img: woman,
  },
];

export const texxtSize1 =
  "пожалуйста, перед заказом одежды измерьте свои показатели обхватов “талии”, “груди” и “бёдер”";

export const texxtSize2 =
  " “обхват талии”, “обхват груди”, “обхват бёдер” — отражен в сантиметрах (см)";

export const list = [
  {
    id: 1,
    productName: "Мужская футболка",
    brand: {
      brandName: "Adidas",
    },
    productStatus: {
      status: "В наличии",
    },
    colors: [
      { id: 1, color: "Черный" },
      { id: 2, color: "Белый" },
    ],
    sizes: [
      { id: 1, sizeName: "M" },
      { id: 2, sizeName: "L" },
    ],
    colorId: 1,
    sizeId: 2,
    photos: [
      { id: 1, url: colorBig },
      { id: 2, url: colorBig },
    ],
    price: 2500,
    count: 1,
    saleType: {
      type: "шт",
    },
  },
  {
    id: 1,
    productName: "Мужская футболка",
    brand: {
      brandName: "Adidas",
    },
    productStatus: {
      status: "В наличии",
    },
    colors: [
      { id: 1, color: "Черный" },
      { id: 2, color: "Белый" },
    ],
    sizes: [
      { id: 1, sizeName: "M" },
      { id: 2, sizeName: "L" },
    ],
    colorId: 1,
    sizeId: 2,
    photos: [
      { id: 1, url: colorBig },
      { id: 2, url: colorBig },
    ],
    price: 2500,
    count: 1,
    saleType: {
      type: "шт",
    },
  },
  {
    id: 1,
    productName: "Мужская футболка",
    brand: {
      brandName: "Adidas",
    },
    productStatus: {
      status: "В наличии",
    },
    colors: [
      { id: 1, color: "Черный" },
      { id: 2, color: "Белый" },
    ],
    sizes: [
      { id: 1, sizeName: "M" },
      { id: 2, sizeName: "L" },
    ],
    colorId: 1,
    sizeId: 2,
    photos: [
      { id: 1, url: colorBig },
      { id: 2, url: colorBig },
    ],
    price: 2500,
    count: 1,
    saleType: {
      type: "шт",
    },
  },
];

export const listBasket = [
  {
    codeid: 1,
    img: woman,
    price: "3 490 ₽",
    title: "Футболка из премиальной ткани с облегающим кроем",
    count: 2,
  },
  {
    codeid: 2,
    img: woman,
    price: "3 490 ₽",
    title: "Футболка из премиальной ткани с облегающим кроем",
    count: 2,
    sale: "2000",
  },
  {
    codeid: 3,
    img: woman,
    price: "3 490 ₽",
    title: "Футболка из премиальной ткани с облегающим кроем",
    count: 2,
  },
  {
    codeid: 4,
    img: woman,
    price: "3 490 ₽",
    title: "Футболка из премиальной ткани с облегающим кроем",
    count: 2,
  },
  {
    codeid: 5,
    img: woman,
    price: "3 490 ₽",
    title: "Футболка из премиальной ткани с облегающим кроем",
    count: 2,
  },
];

export const confidation = "я ознакомлен(-на) и полностью согласен(-на)";

export const link1 =
  "с условиями доставки товара, с условиями публичной оферты";

export const link2 = " с условиями обработки персональных данных";

export const listBrands = [
  {
    codeid: 31,
    name: "Керамическая плитка",
    count: 10,
  },
  {
    codeid: 32,
    name: "Керамогранитная плитка",
    count: 30,
  },
  {
    codeid: 33,
    name: "Фасадная плитка",
    count: 5,
  },
  {
    codeid: 34,
    name: "Плитка для бассейна",
    count: 55,
  },
];

export const listCards = [
  {
    codeid: 1,
    categoryName: "Подарочная карта",
    count: 3,
  },
];

export const listNavDecor = [
  { link: "Подтверждение заказа", path: "/basket", active: false },
  { link: "Оформление заказа", path: "/decor", active: true },
];

export const listNavBasket = [
  { link: "Подтверждение заказа", path: "/basket", active: true },
];

export const listCloth = [
  {
    id: 1,
    productName: "Avalanche",
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    discountActive: "-15%",
    price: "1000",
    oldPrice: "5000",
    info: "в наличии",
    sum: "1050 рублей за м²",
    typeProd: "Керамическая плитка",
    kol: "28 шт.",
    listWords: ["облицовочная", "напольная", "декор", "с эффектом — baby skin"],
  },

  {
    id: 2,
    productName: "Nalanche",
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    discountActive: "-15%",
    price: "1000",
    oldPrice: "5000",
    info: "под заказ",
    sum: "775 рублей за м²",
    typeProd: "Керамическая плитка",
    kol: "28 шт.",
    listWords: ["облицовочная", "напольная", "напольная", "декор"],
  },

  {
    id: 3,
    productName: "Panamance",
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    price: "1000",
    oldPrice: "5000",
    info: "ограниченная коллекция",
    sum: "775 рублей за м²",
    typeProd: "Керамическая плитка",
    kol: "28 шт.",
  },

  {
    id: 4,
    productName: "Nalanche",
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    discountActive: "-15%",
    price: "1000",
    oldPrice: "5000",
    info: "под заказ",
    sum: "775 рублей за м²",
    typeProd: "Керамическая плитка",
    kol: "28 шт.",
  },

  {
    id: 5,
    productName: "Nalanche",
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    discountActive: "-15%",
    price: "1000",
    oldPrice: "5000",
    info: "под заказ",
    sum: "775 рублей за м²",
    typeProd: "Керамическая плитка",
    kol: "28 шт.",
  },

  {
    id: 6,
    productName: "Avalanche",
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    price: "1000",
    oldPrice: "5000",
    info: "в наличии",
    sum: "1050 рублей за м²",
    typeProd: "Керамическая плитка",
    kol: "28 шт.",
  },
];

export const listMenu = [
  { id: 1, name: "о компании" },
  { id: 2, name: "доставка и оплата" },
  { id: 3, name: "подарочная карта" },
  { id: 4, name: "партнерская программа" },
  { id: 5, name: "рекламная кампания" },
  { id: 6, name: "контактная информация" },
];

const errText = "необходимо заполнить";
const errTextNum = "необходимо правильно заполнить номер";

export const defaultInputsDecor = {
  name: { text: "", error: false, errText },
  firstName: { text: "", error: false, errText },
  lastName: { text: "", error: false, errText },
  num: { text: "", error: false, errText: errTextNum },
  email: { text: "", error: false, errText: "введите корректный email" },
  deliv: { text: "", error: false, errText: errText },
  deliv_home: { text: "", error: false, errText },
  deliv_home_num: { text: "", error: false, errText },
};
