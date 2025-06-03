import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../Validation/ValidationSchema";
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

      <Formik
        initialValues={{
          cardNumber: "",
          expirationDate: "",
          cvc: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form submitted with values:", values);
          setSubmitting(false);
        }}
      >
        {({ isValid, isSubmitting, touched, errors, setFieldTouched }) => (
          <Form className="billing-form" noValidate>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <Field
                id="cardNumber"
                name="cardNumber"
                type="text"
                placeholder="1234 1234 1234 1234"
                className={
                  touched.cardNumber && errors.cardNumber ? "input-error" : ""
                }
              />
              <ErrorMessage
                name="cardNumber"
                component="div"
                className="error-message"
              />
            </div>

            <div className="wrapper">
              <div className="form-group">
                <label htmlFor="expirationDate">Expiration Date</label>
                <Field
                  id="expirationDate"
                  name="expirationDate"
                  type="text"
                  placeholder="MM/YY"
                  className={
                    touched.expirationDate && errors.expirationDate
                      ? "input-error"
                      : ""
                  }
                />
                <ErrorMessage
                  name="expirationDate"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cvc">CVC</label>
                <div className="input-wrapper">
                  <Field
                    id="cvc"
                    name="cvc"
                    type="text"
                    className={touched.cvc && errors.cvc ? "input-error" : ""}
                    onFocus={(e) => {
                      document.querySelector(".cvc-placeholder").style.display =
                        "none";
                      e.target.placeholder = "123";
                    }}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        document.querySelector(
                          ".cvc-placeholder"
                        ).style.display = "block";
                        e.target.placeholder = "";
                      }
                      setFieldTouched("cvc", true);
                    }}
                  />
                  {!touched.cvc || !errors.cvc?.length ? (
                    <div className="cvc-placeholder">
                      <span>•</span>
                      <span>•</span>
                      <span>•</span>
                    </div>
                  ) : null}
                  <button
                    type="button"
                    className="info-button"
                    onClick={() => console.log("Show CVC info")}
                    aria-label="CVC Information"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#DADCE0" />
                      <text
                        x="12"
                        y="16"
                        fontFamily="Inter"
                        fontSize="14"
                        fill="#6B7280"
                        textAnchor="middle"
                      >
                        i
                      </text>
                    </svg>
                  </button>
                </div>
                <ErrorMessage
                  name="cvc"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary start-trial-button"
              disabled={!isValid || isSubmitting}
            >
              Start Trial
            </button>

            <div className="disclaimer">
              You'll have your <span>Plan Pro for 1 year</span>. After this
              period of time, your plan will be{" "}
              <span>automatically renewed</span> at its original price without
              any discounts applied.
            </div>
          </Form>
        )}
      </Formik>

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
