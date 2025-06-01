import { useFormik } from "formik";
import "./BillingForm.scss";

const ApplePayButton = ({ onClick }) => (
  <button className="apple-pay-button" type="button" onClick={onClick}>
     Pay
  </button>
);

const CheckoutForm = () => {
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
    onSubmit: (values) => {
      alert("Submitting card info:\n" + JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <button
          className="back-button"
          type="button"
          onClick={() => window.history.back()}
        >
          ←
        </button>
        <h1 className="checkout-title">Checkout</h1>
        <button className="language-toggle" type="button">
          Укр
        </button>
      </div>

      <div className="trial-banner">
        <span className="free-period">5 days free</span>
        <span className="trial-details">then 299.99 UAH per 14 days</span>
      </div>

      <div className="payment-section">
        <ApplePayButton onClick={() => alert("Apple Pay flow goes here")} />
      </div>

      <div className="divider">
        <span>or pay with card</span>
      </div>

      <form className="billing-form" onSubmit={formik.handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            placeholder="1234 1234 1234 1234"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.cardNumber && formik.errors.cardNumber
                ? "input-error"
                : ""
            }
          />
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <div className="error-message">{formik.errors.cardNumber}</div>
          ) : null}
        </div>

        <div className="wrapper">
          <div className="form-group">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              id="expirationDate"
              name="expirationDate"
              type="text"
              placeholder="MM/YY"
              value={formik.values.expirationDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.expirationDate && formik.errors.expirationDate
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.expirationDate && formik.errors.expirationDate ? (
              <div className="error-message">
                {formik.errors.expirationDate}
              </div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              name="cvv"
              type="password"
              placeholder="***"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.cvv && formik.errors.cvv ? "input-error" : ""
              }
            />
            {formik.touched.cvv && formik.errors.cvv ? (
              <div className="error-message">{formik.errors.cvv}</div>
            ) : null}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary start-trial-button"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          Start Trial
        </button>

        <div className="disclaimer">
          You’ll have your Plan Pro for 1 year. After this period of time, your
          plan will be automatically renewed at its original price without any
          discounts applied.
        </div>
      </form>


    </div>
  );
};

export default CheckoutForm;
