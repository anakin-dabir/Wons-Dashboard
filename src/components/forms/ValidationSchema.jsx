/* eslint-disable */
// /src/components/forms/ValidationSchema.jsx
// Thursday, November 23rd 2023, 5:52 pm

import * as Yup from 'yup';

export const emailValidationSchema = Yup.object({
  email: Yup.string().email('Invalid Email').required('Email is mandatory'),
});

export const passwordValidationSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Password cannot be less than 8 characters')
    .required('Password is mandatory'),
});

export const LoginValidationSchema = emailValidationSchema.concat(passwordValidationSchema);
