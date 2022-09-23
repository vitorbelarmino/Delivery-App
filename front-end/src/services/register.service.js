import { saveDataUser } from './login.storage';

async function useRegister(data) {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data }),
    method: 'POST',
  };

  try {
    const END_POINT = 'http://localhost:3001/register';
    const response = await fetch(END_POINT, { ...config });
    const result = await response.json();
    if (!result.error) {
      saveDataUser(result);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default useRegister;
