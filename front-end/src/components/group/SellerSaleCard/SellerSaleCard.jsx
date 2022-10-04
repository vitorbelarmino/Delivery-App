import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Container, DataContainer, StatusBtn, InsideContainer } from './styles';

export default function SellerSaleCard({ id, status, data, total, address }) {
  const navigate = useNavigate();

  const redirectDetails = () => {
    navigate(`/seller/orders/${id}`);
  };

  return (
    <Container onClick={ redirectDetails } role="presentation">
      <div data-testid={ `seller_orders__element-order-id-${id}` }>{id}</div>
      <InsideContainer>
        <StatusBtn data-testid={ `seller_orders__element-order-status-${id}` }>
          {status}
        </StatusBtn>
        <DataContainer>
          <div data-testid={ `seller_orders__element-order-date-${id}` }>
            {data}
          </div>
          <div data-testid={ `seller_orders__element-card-price-${id}` }>{total}</div>
        </DataContainer>
        <p data-testid={ `seller_orders__element-card-address-${id}` }>{address}</p>
      </InsideContainer>
    </Container>
  );
}

SellerSaleCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
