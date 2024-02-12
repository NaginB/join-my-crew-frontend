import * as Yup from 'yup';

 // Define Yup schema for validation
export const signUpValidation = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your full name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email address"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});