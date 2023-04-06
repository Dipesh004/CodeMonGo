import * as yup from "yup";

export const requireValidation = ({ name }) =>
  yup.string().trim().nullable().required(`${name} is required`);

export const numberValidation = ({ name, min = 0 }) =>
  yup
    .number()
    .required(`${name} is required`)
    .typeError(`${name} is required`)
    .positive(`${name} must be a positive number`)
    .min(min, `${name} must be greater than or equal to ${min}`)
    .integer(`${name} must be a integer value only`);

export const phoneNumberValidation = ({ name }) =>
  yup
    .string()
    .matches(
      /^$|^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      `Invalid ${name}`
    )
    .nullable();
    
export const fileValidation = ({ name }) =>
  yup
    .mixed()
    .required(`${name} is required`);
