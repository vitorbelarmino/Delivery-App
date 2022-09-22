export default validEmail = (mail) => {
  const isValid = mail.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  return isValid;
};
