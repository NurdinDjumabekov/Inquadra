// export const validations = {
//   name: inputsDecor?.deliv?.length > 3,
//   firstName: inputsDecor?.deliv?.length > 3,
//   lastName: inputsDecor?.deliv?.length > 3,
//   num: '',
//   email: '',
//   deliv: '',
//   deliv_home: '',
//   deliv_home_num: '',
// };

import { tranformNumber } from './tranformNumber';

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validationSendData = (inputsDecor) => {
  if (
    inputsDecor?.name?.text?.length > 1 &&
    inputsDecor?.email?.text?.length > 1 &&
    inputsDecor?.deliv?.text?.length > 1 &&
    inputsDecor?.deliv_home?.text?.length > 1 &&
    inputsDecor?.deliv_home_num?.text?.length > 1 &&
    tranformNumber(inputsDecor?.num?.text)?.length === 11 &&
    inputsDecor?.checkIfDeliv === true &&
    inputsDecor?.typeDelivery !== 0 &&
    inputsDecor?.typePay !== 0
  ) {
    return true;
  } else {
    return false;
  }
};
