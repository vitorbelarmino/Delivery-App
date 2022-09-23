const DATA_USER = 'data_user';
const TOKEN = 'token';
export const dataUser = () => (JSON.parse(localStorage.getItem(DATA_USER))) || [];
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
  const result = dataUser();
  result.push(data);
  localStorage.setItem(DATA_USER, JSON.stringify(result));
};
