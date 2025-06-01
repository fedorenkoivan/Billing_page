import { useFormik } from "formik";
import "./BillingForm.scss";

const BillingForm = () => {
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
    onSubmit: (values) => {
      console.log("Submitting card info:", values);
    },
  });

  return (
    <form className="billing-form" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="cardNumber">Card number</label>
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
          <label htmlFor="expirationDate">Expiration date</label>
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
              {formik.touched.css && formik.errors.cvv ? (
                <div className="error-messages">{formik.errors.css}</div>
              ) : null}
            </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Start Trial
      </button>
    </form>
  );
};

export default BillingForm;
