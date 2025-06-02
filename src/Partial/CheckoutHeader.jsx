import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./CheckoutHeader.scss";

const CheckoutHeader = () => {
  return (
    <div className="checkout-header">
      <ArrowBackIcon className="back-button" />

      <div className="checkout-title-section">
      <h1 className="checkout-title">Checkout</h1>
        <span className="free-period">5 days free</span>
        <span className="trial-details">then 299.99 UAH per 14 days</span>
      </div>
      <button className="language-toggle" type="button">
        Укр
      </button>
    </div>
  );
};

export default CheckoutHeader;
