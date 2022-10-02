import Header from '../../components/group/Header';
import useMySellers from '../../services/mySellers.service';
import styles from '../../styles/ordersSale.module.css';

export default function Orders() {
  const [data] = useMySellers('sellers/sales');

  return (
    <div>
      <Header labelNav="Pedidos" />
      <main className={ styles.container_mySales }>
        {
          (data.length)
            ? data.map((item) => console.log(item))
            : (<div className={ styles.no_sales }>Não possui vendas !</div>)
        }
      </main>
    </div>
  );
}
