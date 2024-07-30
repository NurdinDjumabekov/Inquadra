export const tranformNumber = (phoneNumber) => {
  return phoneNumber.replace(/[^\d]/g, "");
};

export const searchBrand = (list, active) => {
  const activeIdBrand = list?.filter((i) => i.id === active);

  const resp = activeIdBrand?.[0]?.brandName
    ? [{ link: activeIdBrand?.[0]?.brandName, path: "/" }]
    : [];

  return resp;
};
