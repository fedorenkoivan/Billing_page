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
              {[
                {
                  name: "expirationDate",
                  label: "Expiration Date",
                  type: "text",
                  placeholder: "MM/YY",
                },
                {
                  name: "cvc",
                  label: "CVC",
                  type: "password",
                  placeholder: "...",
                },
              ].map(({ name, label, type, placeholder }) => (
                <div className="form-group" key={name}>
                  <label htmlFor={name}>{label}</label>
                  <div className={name === "cvc" ? "input-wrapper" : ""}>
                    <Field
                      id={name}
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      className={
                        touched[name] && errors[name] ? "input-error" : ""
                      }
                    />
                  </div>
                  <ErrorMessage
                    name={name}
                    component="div"
                    className="error-message"
                  />
                </div>
              ))}
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
