import * as yup from "yup";
import {  phoneNumberValidation } from "../../helpers/validations";

export const basicDetailSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is Required ")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  mobileNumber: phoneNumberValidation({name:"Mobile Number"}).required("Mobile Number is required"),
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
  address: yup.string().required("Address is Required"),
  reason: yup.string().required("This is required Field"),
  termsAndConditions: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});


export const contactDetailsSchema = yup.object().shape({
});
