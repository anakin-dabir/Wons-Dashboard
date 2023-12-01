// /src/components/forms/ValidationSchema.jsx
// Thursday, November 23rd 2023, 5:52 pm

import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Enter Valid Email').required('Enter Email'),
  // name: Yup.string().required('Name is required'),
});

export default validationSchema;
