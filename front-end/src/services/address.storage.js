const DATA_ADDRESS = 'address';

export const dataAddress = () => (JSON.parse(localStorage.getItem(DATA_ADDRESS))) || {};

export const getAddress = () => {
  const result = dataAddress();
  if (result.address !== undefined) {
    return result.address;
  }
  return false;
};

export const saveAddress = (data) => {
  localStorage.setItem(DATA_ADDRESS, JSON.stringify(data));
};
