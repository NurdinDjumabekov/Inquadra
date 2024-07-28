import woman from '../assets/noneData/Rectangle 996.png';
import woman2 from '../assets/noneData//Rectangle 996.png';
import color from '../assets/images/голубая лагуна.png';
import colorBig from '../assets/noneData/bigMaterial.png';
import color2 from '../assets/images/молочный.png';

export const listSorting = [
  { id: 1, name: 'по доступным' },
  { id: 2, name: 'по премиальным' },
  { id: 3, name: 'по новым' },
  { id: 4, name: 'по популярным' },
];

export const dataCatalog = [
  {
    id: 1,
    title: 'Реализация',
    description: 'Популярное со скидками до -70%, то что осталось на складах',
    img: woman,
  },
  {
    id: 2,
    title: 'Бестселлер-коллекция',
    description: 'Легендарное, то что в трендах, останется навечно с нами',
    img: woman,
  },
  {
    id: 3,
    title: 'Нью-коллекция',
    description:
      'Новое, то что в хитах, останется ли оно, решать только тебе и твоим близким',
    img: woman,
  },
];

export const texxtSize1 =
  'пожалуйста, перед заказом одежды измерьте свои показатели обхватов “талии”, “груди” и “бёдер”';

export const texxtSize2 =
  ' “обхват талии”, “обхват груди”, “обхват бёдер” — отражен в сантиметрах (см)';

export const list = [
  {
    id: 1,
    productName: 'Мужская футболка',
    brand: {
      brandName: 'Adidas',
    },
    productStatus: {
      status: 'В наличии',
    },
    colors: [
      { id: 1, color: 'Черный' },
      { id: 2, color: 'Белый' },
    ],
    sizes: [
      { id: 1, sizeName: 'M' },
      { id: 2, sizeName: 'L' },
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
      type: 'шт',
    },
  },
  {
    id: 1,
    productName: 'Мужская футболка',
    brand: {
      brandName: 'Adidas',
    },
    productStatus: {
      status: 'В наличии',
    },
    colors: [
      { id: 1, color: 'Черный' },
      { id: 2, color: 'Белый' },
    ],
    sizes: [
      { id: 1, sizeName: 'M' },
      { id: 2, sizeName: 'L' },
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
      type: 'шт',
    },
  },
  {
    id: 1,
    productName: 'Мужская футболка',
    brand: {
      brandName: 'Adidas',
    },
    productStatus: {
      status: 'В наличии',
    },
    colors: [
      { id: 1, color: 'Черный' },
      { id: 2, color: 'Белый' },
    ],
    sizes: [
      { id: 1, sizeName: 'M' },
      { id: 2, sizeName: 'L' },
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
      type: 'шт',
    },
  },
];

export const listBasket = [
  {
    codeid: 1,
    img: woman,
    price: '3 490 ₽',
    title: 'Футболка из премиальной ткани с облегающим кроем',
    count: 2,
  },
  {
    codeid: 2,
    img: woman,
    price: '3 490 ₽',
    title: 'Футболка из премиальной ткани с облегающим кроем',
    count: 2,
    sale: '2000',
  },
  {
    codeid: 3,
    img: woman,
    price: '3 490 ₽',
    title: 'Футболка из премиальной ткани с облегающим кроем',
    count: 2,
  },
  {
    codeid: 4,
    img: woman,
    price: '3 490 ₽',
    title: 'Футболка из премиальной ткани с облегающим кроем',
    count: 2,
  },
  {
    codeid: 5,
    img: woman,
    price: '3 490 ₽',
    title: 'Футболка из премиальной ткани с облегающим кроем',
    count: 2,
  },
];

export const confidation = 'я ознакомлен(-на) и полностью согласен(-на)';

export const link1 =
  'с условиями доставки товара, с условиями публичной оферты';

export const link2 = ' с условиями обработки персональных данных';

export const listClothWomen = [
  {
    codeid: 1,
    text: 'Топики',
    count: 12,
    active: true,
    type: 1,
  },
  {
    codeid: 2,
    text: 'Толстовки-свитшоты',
    count: 12,
    active: false,
    type: 1,
  },
  {
    codeid: 3,
    text: 'Толстовки-худи',
    count: 12,
    active: false,
    type: 1,
  },
  {
    codeid: 4,
    text: 'Бестселлер-коллекция',
    count: 100,
    active: false,
    type: 1,
  },
  {
    codeid: 5,
    text: 'Нью-коллекция',
    count: 12,
    active: false,
    type: 1,
  },
];

export const listClothMan = [
  {
    codeid: 21,
    text: 'Топики',
    count: 12,
    active: true,
    type: 2,
  },
  {
    codeid: 22,
    text: 'Толстовки-свитшоты',
    count: 12,
    active: false,
    type: 2,
  },
  {
    codeid: 23,
    text: 'Толстовки-худи',
    count: 12,
    active: false,
    type: 2,
  },
  {
    codeid: 24,
    text: 'Бестселлер-коллекция',
    count: 100,
    active: false,
    type: 2,
  },
  {
    codeid: 25,
    text: 'Нью-коллекция',
    count: 12,
    active: false,
    type: 2,
  },
];

export const listBrands = [
  {
    codeid: 31,
    name: 'Керамическая плитка',
    count: 10,
  },
  {
    codeid: 32,
    name: 'Керамогранитная плитка',
    count: 30,
  },
  {
    codeid: 33,
    name: 'Фасадная плитка',
    count: 5,
  },
  {
    codeid: 34,
    name: 'Плитка для бассейна',
    count: 55,
  },
];

export const listCards = [
  {
    codeid: 1,
    categoryName: 'Подарочная карта',
    count: 3,
  },
];

export const listClothSize = [
  {
    codeid: 1,
    text: 'xXs',
    count: 12,
    active: true,
  },
  {
    codeid: 2,
    text: 'xs',
    count: 12,
    active: false,
  },
  {
    codeid: 3,
    text: 'OV3',
    count: 12,
    active: false,
  },
  {
    codeid: 4,
    text: 'xxs',
    count: 100,
    active: false,
  },
  {
    codeid: 5,
    text: 'xXs',
    count: 12,
    active: false,
  },
  {
    codeid: 6,
    text: 'xs',
    count: 12,
    active: false,
  },
  {
    codeid: 7,
    text: 'OV3',
    count: 12,
    active: false,
  },
  {
    codeid: 8,
    text: 'xxs',
    count: 100,
    active: false,
  },
];

export const listColors = [
  {
    codeid: 1,
    imgColor: color,
    imgColorBig: colorBig,
    active: true,
  },
  {
    codeid: 2,
    imgColor: color2,
    imgColorBig: colorBig,
    active: false,
  },
  {
    codeid: 3,
    imgColor: color,
    imgColorBig: colorBig,
    active: false,
  },
  {
    codeid: 4,
    imgColor: color2,
    imgColorBig: colorBig,
    active: false,
  },
];

export const defaultRequest = {
  categId: 0,
  activeSize: 0,
  activeColor: 0,
  categId: 0,
  activeSize: 0,
  type: 0,
  minPrice: 10,
  maxPrice: 12000,
  activeBrands: 0,
};

export const listDelivery = [
  { id: 1, name: '«Pony Express»' },
  { id: 2, name: '«DPD (Dynamic Parcel Distribution)»' },
  { id: 3, name: '«СДЭК (Служба Доставки Экспресс Курьер)»' },
  { id: 4, name: '«GLS (General Logistics Systems)»' },
];

export const listKredit = [
  { id: 1, name: '«Банковская рассрочка»' },
  { id: 2, name: '«Рассрочка от магазина»' },
  { id: 3, name: '«Долями»' },
  { id: 4, name: '«Рассрочка через платежные сервисы»' },
];

export const listNavDecor = [
  { link: 'Подтверждение заказа', path: '/basket', active: false },
  { link: 'Оформление заказа', path: '/decor', active: true },
];

export const listNavBasket = [
  { link: 'Подтверждение заказа', path: '/basket', active: true },
];

export const listCloth = [
  {
    id: 1,
    productName: 'Avalanche',
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    discountActive: '-15%',
    price: '1000',
    oldPrice: '5000',
    info: 'в наличии',
    sum: '1050 рублей за м²',
    typeProd: 'Керамическая плитка',
    kol: '28 шт.',
    listWords: ['облицовочная', 'напольная', 'декор', 'с эффектом — baby skin'],
  },

  {
    id: 2,
    productName: 'Nalanche',
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    discountActive: '-15%',
    price: '1000',
    oldPrice: '5000',
    info: 'под заказ',
    sum: '775 рублей за м²',
    typeProd: 'Керамическая плитка',
    kol: '28 шт.',
    listWords: ['облицовочная', 'напольная', 'напольная', 'декор'],
  },

  {
    id: 3,
    productName: 'Panamance',
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    price: '1000',
    oldPrice: '5000',
    info: 'ограниченная коллекция',
    sum: '775 рублей за м²',
    typeProd: 'Керамическая плитка',
    kol: '28 шт.',
  },

  {
    id: 4,
    productName: 'Nalanche',
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    discountActive: '-15%',
    price: '1000',
    oldPrice: '5000',
    info: 'под заказ',
    sum: '775 рублей за м²',
    typeProd: 'Керамическая плитка',
    kol: '28 шт.',
  },

  {
    id: 5,
    productName: 'Nalanche',
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    discountActive: '-15%',
    price: '1000',
    oldPrice: '5000',
    info: 'под заказ',
    sum: '775 рублей за м²',
    typeProd: 'Керамическая плитка',
    kol: '28 шт.',
  },

  {
    id: 6,
    productName: 'Avalanche',
    photos: [
      { url: woman, main: true },
      { url: woman2, main: false },
      { url: woman, main: false },
      { url: woman2, main: false },
    ],
    price: '1000',
    oldPrice: '5000',
    info: 'в наличии',
    sum: '1050 рублей за м²',
    typeProd: 'Керамическая плитка',
    kol: '28 шт.',
  },
];

export const listMenu = [
  { id: 1, name: 'о компании' },
  { id: 2, name: 'доставка и оплата' },
  { id: 3, name: 'подарочная карта' },
  { id: 4, name: 'партнерская программа' },
  { id: 5, name: 'рекламная кампания' },
  { id: 6, name: 'контактная информация' },
];
