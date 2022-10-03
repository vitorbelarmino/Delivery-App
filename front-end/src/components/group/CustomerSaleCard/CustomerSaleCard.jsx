import PropTypes from 'prop-types';
import { Container, DataContainer, StatusBtn } from './styles';

export default function CustomerSaleCard({ id, status, data, total }) {
  return (
    <Container>
      <div data-testid={ `customer_orders__element-order-id-${id}` }>{id}</div>
      <StatusBtn data-testid={ `customer_orders__element-delivery-status-${id}` }>
        {status}
      </StatusBtn>
      <DataContainer>
        <div data-testid={ `customer_orders__element-order-date-${id}` }>
          {data}
        </div>
        <div data-testid={ `customer_orders__element-card-price-${id}` }>{total}</div>
      </DataContainer>
    </Container>
  );
}

CustomerSaleCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};
