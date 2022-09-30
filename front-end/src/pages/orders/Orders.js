import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Button } from '../../components';
import Header from '../../components/group/Header';
import converteEmReal from '../../helper/moneyConverter';
import styles from '../../styles/orders.module.css';
import request from '../../services/getApi';

moment.locale('pt-br');

const DTIS = {
  status: 'customer_order_details__element-order-details-label-delivery-status',
  itemNumber: 'customer_order_details__element-order-table-item-number-',
  itemName: 'customer_order_details__element-order-table-name-',
  quantity: 'customer_order_details__element-order-table-quantity-',
  price: 'customer_order_details__element-order-table-unit-price-',
  subTotal: 'customer_order_details__element-order-table-sub-total-',
};

export default function Orders() {
  const [order, setOrder] = useState();
  const [ordStatus, setOrdStatus] = useState();
  const { id } = useParams();

  const marcarEntregue = () => {
    setOrdStatus('ENTREGUE');
  };

  useEffect((() => {
    const requestDetails = async () => {
      const data = await request(`sale/${id}`);
      setOrder(data);
      setOrdStatus(data.sale.status);
    };
    requestDetails();
  }), [id]);

  return (
    <div>
      <Header />
      <div className="title">Detalhe do Pedido</div>
      <div className="styles.details">
        <p data-testid="customer_order_details__element-order-details-label-order-id">
          Pedido
          {' '}
          {order ? `PEDIDO 000${order.sale.deliveryNumber}` : '0001'}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-seller-name">
          {order ? `P. Vend: ${order.seller.name}` : 'Vendedor'}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-order-date">
          {order ? moment().format('DD/MM/YYYY', order.sale.saleDate) : '30/09/2022'}
        </p>
        <p
          data-testid={ DTIS.status }
        >
          {ordStatus}
        </p>
        <Button
          label="MARCAR COMO ENTREGUE"
          onClick={ marcarEntregue }
          disabled={ false }
          id="customer_order_details__button-delivery-check"
          className={ styles.btn_del }
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descricao</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {order?.sale.products.length > 0
            && order.sale.products.map(({ name, SalesProducts, price }, index) => (
              <tr key={ index }>
                <td
                  ata-testid={ `${DTIS.itemNumber}${index}` }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={ `${DTIS.itemName}${index}` }
                >
                  {name}
                </td>
                <td
                  data-testid={ `${DTIS.quantity}${index}` }
                >
                  {SalesProducts.quantity}
                </td>
                <td
                  data-testid={ `${DTIS.price}${index}` }
                >
                  {converteEmReal(price)}
                </td>
                <td
                  data-testid={ `${DTIS.subTotal}${index}` }
                >
                  {converteEmReal(price * SalesProducts.quantity)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div
        className={ styles.btnTotalItens }
        data-testid="customer_order_details__element-order-total-price"
      >
        <p>{converteEmReal(order ? order.sale.totalPrice : 'R$ 10.00')}</p>
      </div>
    </div>
  );
}
