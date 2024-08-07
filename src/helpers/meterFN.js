export const meterFN = (titleSize, everyCloth) => {
  console.log(titleSize, "titleSize, tilePrice");
  // Разделяем строку на ширину и высоту

  const dimensions = extractNumbers(titleSize);

  const output = everyCloth?.complect?.replace(/\D/g, "");

  console.log(output, "output");

  let width = +dimensions?.[0];
  let height = +dimensions?.[1];

  console.log(width, height);

  // Преобразуем размеры из мм в метры
  let widthInMeters = +width / 10;
  let heightInMeters = +height / 10;

  // Рассчитываем площадь одной плитки в квадратных метрах
  let allsize = +widthInMeters * +heightInMeters;

  // Рассчитываем стоимость квадратного метра
  let costPerSquareMeter = (+allsize * +output) / 100;

  // Округляем до одной цифры после запятой и возвращаем результат
  return parseFloat(costPerSquareMeter?.toFixed(1));
};

const extractNumbers = (input) => {
  // Извлекаем все группы цифр из строки
  const numberGroups = input?.match(/\d+/g);

  return numberGroups || [];
};

//////////////////////////////////////////////////////////////////////////

export const checkBasket = (list, everyCloth) => {
  /// для проверки есть ли какой-то everyCloth в корзине,
  /// возвращается bool значение
  const bool = list?.some((item) => item?.id === everyCloth?.id);
  return bool;
};

export const returnBasket = (list, everyCloth) => {
  ///// для проверки есть ли какой-то everyCloth в корзине, если да, то возвращаю его
  const obj = list?.find((item) => item?.id === everyCloth?.id);
  ///// если его нет , то он будет возвращать undefined
  return obj;
};

export const returnId = (list, id) => {
  ///// для проверки есть ли какой-то everyCloth в корзине, если да, то возвращаю его
  const obj = list?.filter((item) => item?.id === id);
  ///// если его нет , то он будет возвращать undefined
  return obj;
};
