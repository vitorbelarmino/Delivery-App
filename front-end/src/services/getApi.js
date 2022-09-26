const URL = 'http://localhost:3001/';

const request = async (parameter) => {
  const response = await fetch(`${URL}${parameter}`);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default request;
