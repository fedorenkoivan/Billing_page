import { useFormik } from "formik";
import AppleIcon from "@mui/icons-material/Apple";
import "./BillingForm.scss";

const ApplePayButton = ({ onClick }) => (
  <button className="apple-pay-button" type="button" onClick={onClick}>
    <div className="apple-pay-logo">
      <AppleIcon />
      <span>Pay</span>
    </div>
  </button>
);

const CheckoutForm = () => {
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expirationDate: "",
      cvc: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="checkout-container">
      <div className="payment-section">
        <ApplePayButton
          onClick={() => console.log("Apple Pay flow goes here")}
        />
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
            <label htmlFor="cvc">CVC</label>
            <div className="input-wrapper">
              <input
                id="cvc"
                name="cvc"
                type="password"
                placeholder="..."
                value={formik.values.cvc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.cvc && formik.errors.cvc ? "input-error" : ""
                }
              />
            </div>
            {formik.touched.cvc && formik.errors.cvc ? (
              <div className="error-message">{formik.errors.cvc}</div>
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
          You’ll have your <span>Plan Pro for 1 year</span>. After this period
          of time, your plan will be <span>automatically renewed</span> at its
          original price without any discounts applied.
        </div>
      </form>
      <div className="order-info-card">
        <div className="order-info-header">
          <span className="order-info-title">Order info (≤ 100 char.)</span>
          <span className="order-info-subtitle">Description (≤ 400 char.)</span>
          <hr />
        </div>

        <div className="order-info-body">
          <div className="product-name">
            Lamel Professional Smart Skin Compact Powder
          </div>
          <div className="product-desc">Пудра для лица</div>
          <hr />
        </div>

        <div className="order-info-footer">
          <span className="free-period">5 days free</span>
          <span className="trial-details">then 299.99 UAH per 14 days</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
