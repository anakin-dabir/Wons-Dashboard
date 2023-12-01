// /src/components/forms/useValidation.jsx
// Thursday, November 23rd 2023, 5:52 pm

import {useFormik} from 'formik';
import validationSchema from './ValidationSchema';

const FormValidation = ({initialValues, handleSubmit}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, {resetForm}) => {
      await handleSubmit(values);
      resetForm();
    },
  });

  return formik;
};

export default FormValidation;
