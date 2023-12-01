// /src/pages/Reset_password/ResetPassword.jsx
// Monday, November 27th 2023, 9:24 pm

import React from 'react';
import useValidation from '../../components/forms/useValidation';
import {Box, Stack, Typography, Button, InputLabel, CardMedia} from '@mui/material';
import Logo from '../../assets/Frame.png';
import InputField from '../../components/InputField';
import ThemeChanger from '../../components/ThemeChanger';

const ResetPassword = () => {
  const initialValues = {
    email: '',
  };
  const handleSubmit = values => {
    console.log(values);
  };
  const formik = useValidation({
    initialValues,
    handleSubmit,
  });
  return (
    <>
      <Box className='box-center h-screen'>
        <ThemeChanger />
        <Stack
          className='box-center'
          bgcolor='neutral.main'
          sx={{
            padding: {xs: '20px', sm: '80px'},
            height: {xs: '100%', sm: '660px'},
            width: '660px',
            gap: '60px',
          }}
        >
          <Stack className='box-center' gap='30px'>
            <CardMedia component='img' src={Logo} alt='Logo' />
            <Typography variant='h5' fontWeight='bold'>
              Recover
            </Typography>
          </Stack>
          <form onSubmit={formik.handleSubmit} className='w-full'>
            <Stack gap={2}>
              <InputLabel htmlFor='email'>Email Address</InputLabel>
              <InputField
                value={formik.values.email}
                onChange={formik.handleChange}
                id='email'
                name='email'
                placeholder='example@gmail.com'
              />
              {formik.touched.email && formik.errors.email && (
                <Typography color='danger.main'>{formik.errors.email}</Typography>
              )}
              <Button fullWidth type='submit'>
                Reset Your Password
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </>
  );
};

export default ResetPassword;
