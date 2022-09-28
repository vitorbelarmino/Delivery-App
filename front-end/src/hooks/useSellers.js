import { useEffect, useState, useContext } from 'react';
import context from '../context/index';
import request from '../services/getApi';

function useSellers(link) {
  const sellers = useContext(context);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const allSellers = await request(link);
        setData(allSellers);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [sellers, link]);

  return [data];
}

export default useSellers;
