// import { useEffect, useState } from 'react';
import { saveToken } from './login.storage';

async function useLogin(data) {
  // const [login] = useState([]);
  const config = {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data }),
    method: 'POST',
  };

  try {
    const END_POINT = 'http://localhost:3001/login';
    const response = await fetch(END_POINT, { ...config });
    const result = await response.json();
    if (result.token) {
      saveToken(result.token);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default useLogin;
