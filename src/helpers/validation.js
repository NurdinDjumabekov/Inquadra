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

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};
