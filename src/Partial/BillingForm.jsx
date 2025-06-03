import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
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
  const [cvcFocused, setCvcFocused] = useState(false);

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
          setTimeout(() => {
            setSubmitting(false);
          }, 2000);
        }}
      >
        {({
          isSubmitting,
          touched,
          errors,
          setFieldTouched,
          setFieldValue,
          values,
        }) => (
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
                onChange={(e) => {
                  const value = e.target.value.replace(/\s/g, "");
                  if (/^\d+$/.test(value)) {
                    let formattedValue = "";
                    for (let i = 0; i < value.length; i++) {
                      if (i > 0 && i % 4 === 0) {
                        formattedValue += " ";
                      }
                      formattedValue += value[i];
                    }

                    setFieldValue("cardNumber", formattedValue.slice(0, 19));
                  } else if (value === "") {
                    setFieldValue("cardNumber", "");
                  }
                }}
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
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    if (value.length <= 4) {
                      let formattedValue = value;
                      if (value.length > 2) {
                        formattedValue = `${value.slice(0, 2)}/${value.slice(
                          2
                        )}`;
                      }
                      setFieldValue("expirationDate", formattedValue);
                    }
                  }}
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
                    maxLength="3"
                    className={touched.cvc && errors.cvc ? "input-error" : ""}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      setFieldValue("cvc", value);
                    }}
                    onFocus={() => {
                      setCvcFocused(true);
                    }}
                    onBlur={(e) => {
                      setFieldTouched("cvc", true);
                      if (!e.target.value) {
                        setCvcFocused(true);
                      }
                    }}
                  />
                  {!values.cvc && !cvcFocused && (
                    <div className="cvc-placeholder">
                      <span>•</span>
                      <span>•</span>
                      <span>•</span>
                    </div>
                  )}
                  <button
                    type="button"
                    className="info-button"
                    aria-label="CVC Information"
                  >
                    <img src="/cvc_info.svg" alt="cvc_info" />
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
  className={`btn btn-primary start-trial-button ${isSubmitting ? "is-loading" : ""}`}
>
  <span className="button-text">Start Trial</span>
  <span className="processing-text">Processing</span>
</button>

            <div className="disclaimer">
              You'll have your <span>Plan Pro during 1 year</span>. After this
              period of time, your plan will be
              <span>automatically renewed</span> with its original price without
              any discounts applied.
            </div>
          </Form>
        )}
      </Formik>

      <div className="order-info-card">
        <div className="order-info-header">
          <span className="order-info-title">Order info ≤ 100 char.</span>
          <span className="order-info-subtitle">Description ≤ 400 char.</span>
        </div>
        <hr />

        <div className="order-info-body">
          <div className="product-name">
            Lamel Professional Smart Skin Compact Powder
          </div>
          <div className="product-desc">Пудра для лица</div>
        </div>
        <hr />

        <div className="order-info-footer">
          <span className="free-period">5 days free</span>
          <span className="trial-details">then 299.99 UAH per 14 days</span>
        </div>
      </div>

      <div className="checkout-footer">
        Powered by <img src="/union.svg" alt="solid" />
      </div>
    </div>
  );
};

export default CheckoutForm;
