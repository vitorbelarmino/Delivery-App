export default async function saveOrder(data, token) {
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
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error, 'aqui');
    return error;
  }
}
