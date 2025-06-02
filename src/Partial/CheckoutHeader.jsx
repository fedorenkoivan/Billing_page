import './CheckoutHeader.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CheckoutHeader = () => {
  return (
    <header className="checkout-header">
      <ArrowBackIcon className="back-button" />

      <h1 className="checkout-title">Checkout</h1>
      <button className="language-toggle" type="button">
        Укр
      </button>
    </header>
  );
};

export default CheckoutHeader;
