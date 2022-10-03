import { useState, useEffect } from 'react';
import moment from 'moment';
import Header from '../../components/group/Header';
import styles from '../../styles/ordersSale.module.css';
import { dataUser, getToken } from '../../services/login.storage';
import CustomerSaleCard from '../../components/group/CustomerSaleCard/CustomerSaleCard';
import Main from './styles';
import converteEmReal from '../../helper/moneyConverter';

moment.locale('pt-br');

//
const user = dataUser();
console.log(user);

const config = {
  headers: {
    'Content-Type': 'application/json',
    authorization: getToken(),
  },
  body: JSON.stringify({ id: user.id }),
  method: 'POST',
};

export default function CustomerOrders() {
  const [data, setData] = useState([]);
  console.log(data, '1');
  useEffect(() => {
    const getOrders = async () => {
      const END_POINT = 'http://localhost:3001/customer/orders';
      const response = await fetch(END_POINT, { ...config });
      const result = await response.json();
      if (!result.error) {
        setData(result);
      }
    };
    getOrders();
    console.log(data, '2');
  });

  return (
    <div>
      <Header labelNav="PRODUTOS" />
      <Main>
        {
          (data.length)
            ? data.map((item, index) => (
              <CustomerSaleCard
                key={ index }
                id={ item.id }
                status={ item.status }
                data={ moment().format('DD/MM/YYYY', item.saleDate) }
                total={ converteEmReal(item.totalPrice) }
              />))
            : (<div className={ styles.no_sales }>Não possui pedidos !</div>)
        }
      </Main>
    </div>
  );
}
