import { getToken } from './login.storage';

console.log(getToken());

export default async function saveOrder(data) {
  console.log(JSON.stringify(data));
  const config = {
    headers: {
      'Content-Type': 'application/json',
      authorization: getToken(),
    },
    body: JSON.stringify(data),
    method: 'POST',
  };

  try {
    const END_POINT = 'http://localhost:3001/sale';
    const response = await fetch(END_POINT, { ...config });
    console.log(response);
    const result = await response.json();
    if (!result.error) {
      saveDataUser(result);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}
