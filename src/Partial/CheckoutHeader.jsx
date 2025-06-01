import './CheckoutHeader.scss';

const CheckoutHeader = () => {
  return (
    <header className="checkout-header">
      <button className="back-button" type="button"> ← </button>
      <h1 className="checkout-title">Checkout</h1>
      <button className="language-toggle" type="button">
        Укр
      </button>
    </header>
  );
};

export default CheckoutHeader;
