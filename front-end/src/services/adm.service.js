import { getToken } from './login.storage';

async function deleteUser(id) {
  const config = {
    headers: { 'Content-Type': 'application/json', authorization: getToken() },
    method: 'DELETE',
  };

  try {
    const END_POINT = `http://localhost:3001/user/${id}`;
    const response = await fetch(END_POINT, { ...config });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default deleteUser;
