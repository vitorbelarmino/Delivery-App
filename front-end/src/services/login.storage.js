const DATA_USER = 'user';
const TOKEN = 'token';
export const dataUser = () => (JSON.parse(localStorage.getItem(DATA_USER))) || {};
export const tokenUser = () => (JSON.parse(localStorage.getItem(TOKEN))) || { token: '' };

export const getToken = () => {
  const result = tokenUser();
  if (result.token !== undefined) {
    return result.token;
  }
  return false;
};

export const saveToken = (token) => {
  const result = tokenUser();
  result.token = token;
  localStorage.setItem(TOKEN, JSON.stringify(result));
};

export const saveDataUser = (data) => {
  localStorage.setItem(DATA_USER, JSON.stringify(data));
};

export const getNameUser = () => {
  const data = dataUser();
  if (data !== undefined) {
    return data.name;
  }
  return '';
};
