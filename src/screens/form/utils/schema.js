import * as yup from "yup";
import { numberValidation, phoneNumberValidation, requireValidation } from "../../helpers/validations";

export const basicDetailSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is Required ")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  mobileNumber: phoneNumberValidation({name:"Mobile Number"}).required("Mobile Number is required"),
});

export const employmentTypeSchema = yup.object().shape({
  employmentType: yup
    .string()
    .required("Select one of the Employment Type is required"),
  monthlyIncome: numberValidation ({name:"Monthly Salary"}),
  modeofPayment: yup.string().required("Select one of these Mode of Payment"),
});

export const contactDetailsSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email ID is Required")
  // eslint-disable-next-line
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter a Valid Email ID"),
  dob: yup.date()
  .required("Date of Birth is required")
  .test("age", "You must be 18 or older", function(birthdate) {
    const cutoff = new Date();
    cutoff.setFullYear(cutoff.getFullYear() - 18);      
    return birthdate <= cutoff;
  }),
  city: requireValidation({ name: "City" }),
  pincode: yup
    .string()
    .required("Pin Code is Required")
    .matches(/^[1-9][0-9]{5}$/, "Enter a Valid Pincode"),
  gender: yup.string().required("Please select your gender"),
});
