import { useState, useEffect } from 'react';
import moment from 'moment';
import Header from '../../components/group/Header';
import Main from './styles';
import converteEmReal from '../../helper/moneyConverter';
import { dataUser, getToken } from '../../services/login.storage';
import SellerSaleCard from '../../components/group/SellerSaleCard/SellerSaleCard';

moment.locale('pt-br');

export default function SellerOrders() {
  const { id } = dataUser();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          authorization: getToken(),
        },
        body: JSON.stringify({ id }),
        method: 'POST',
      };

      const END_POINT = 'http://localhost:3001/sellers/sales';
      const response = await fetch(END_POINT, { ...config });
      const result = await response.json();
      if (!result.error) {
        setData(result);
      }
    };
    getOrders();
    return (() => {});
  }, [id]);

  return (
    <div>
      <Header labelNav="PEDIDOS" />
      <Main>
        {
          (data.length)
            ? data.map((item, index) => (
              <SellerSaleCard
                key={ index }
                id={ item.id }
                status={ item.status }
                data={ moment().format('DD/MM/YYYY', item.saleDate) }
                total={ converteEmReal(item.totalPrice) }
                address={ item.deliveryAddress }
              />
            ))
            : (<div>Não possui vendas !</div>)
        }
      </Main>
    </div>
  );
}
