import * as Yup from "yup";
import { DateTime } from "luxon";

export const validationSchema = Yup.object({
  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(
      /^\d{4} \d{4} \d{4} \d{4}$/,
      "Card number must be in format 1234 1234 1234 1234"
    ),
  expirationDate: Yup.string()
    .required("Expiration date is required")
    .test("expiration-date", "Expiration date must be in format MM/YY with month 01–12 and year 2020–2030", value => {
      if (!value) return false;
      
      const dt = DateTime.fromFormat(value, "MM/yy");

      if(!dt.isValid) return false;

      const { month, year } = dt;

      if(month < 1 || month > 12) return false;
      if(year < 2020 || year > 2030) return false;

      return true;

    }),
  cvc: Yup.string()
    .required("CVC is required")
    .matches(/^\d{3}$/, "CVC must be 3 digits"),
});