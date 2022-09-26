import { useEffect, useState, useContext } from 'react';
import context from '../context/index';
import request from '../services/getApi';

function useProducts(link) {
  const products = useContext(context);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const allProducts = await request(link);
        setData(allProducts);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, [products, link]);

  return [data];
}

export default useProducts;
