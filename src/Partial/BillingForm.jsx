import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AppleIcon from "@mui/icons-material/Apple";
import "./BillingForm.scss";

const validationSchema = Yup.object({
  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(
      /^\d{4} \d{4} \d{4} \d{4}$/,
      "Card number must be in format 1234 1234 1234 1234"
    ),
  expirationDate: Yup.string()
    .required("Expiration date is required")
    .matches(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Expiration date must be in format MM/YY"
    ),
  cvc: Yup.string()
    .required("CVC is required")
    .matches(/^\d{3}$/, "CVC must be 3 digits"),
});

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
        {({ isValid, isSubmitting, touched, errors }) => (
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
                    type="password"
                    placeholder="..."
                    className={touched.cvc && errors.cvc ? "input-error" : ""}
                  />
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
