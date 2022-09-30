import { getToken } from './login.storage';

export default async function saveOrder(data) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    method: 'POST',
    token: getToken(),
  };

  try {
    const END_POINT = 'http://localhost:3001/sale';
    const response = await fetch(END_POINT, { ...config });
    const result = await response.json();

    if (!result.error) {
      // console.log(result);
    }
    // console.log(result.error);

    return result;
  } catch (error) {
    console.log(error, 'aqui');
  }
}