export const validEmail = (mail) => {
  const isValid = mail.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  return isValid;
};

export const validPassword = (password, quantity) => {
  const result = password.length >= quantity;
  return result;
};

export const validName = (name, quantity) => {
  const result = name.length >= quantity;
  return result;
};
