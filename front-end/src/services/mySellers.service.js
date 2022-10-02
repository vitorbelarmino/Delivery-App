import { useState, useEffect } from 'react';
import { dataUser, getToken } from './login.storage';

let sellerId = 0;

if (dataUser().id) {
  sellerId = dataUser().id;
}

const config = {
  headers: {
    'Content-Type': 'application/json',
    authorization: getToken(),
  },
  body: JSON.stringify({ id: Number(sellerId) }),
  method: 'POST',
};

function useMySellers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getMySellers = async () => {
      try {
        const END_POINT = 'http://localhost:3001/sales/mysellers';
        const response = await fetch(END_POINT, { ...config });
        const result = await response.json();
        if (!result.error) {
          setData(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMySellers();
  }, []);

  return [data];
}

export default useMySellers;
