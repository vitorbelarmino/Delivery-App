import { useEffect, useState, useContext } from 'react';
import context from '../context';
import request from '../services/request.get';

function useProducts() {
  const { dataFood } = useContext(context);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const products = await request(link);
        setData(products);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, [dataFood.lenght]);

  return [data];
}

export default useProducts;
