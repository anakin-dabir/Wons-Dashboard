// /src/pages/Login/Form.jsx
// Monday, November 27th 2023, 9:45 pm

import React, {useState, useCallback} from 'react';
import {
  InputLabel,
  Stack,
  Typography,
  InputAdornment,
  FormControlLabel,
  Button,
  Link,
  Checkbox,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputField from '../../components/InputField';
import {Link as NavLink} from 'react-router-dom';
import useValidation from '../../components/forms/useValidation';
import {LoginValidationSchema} from '../../components/forms/ValidationSchema';

const Form = () => {
  const initialValues = {email: '', password: ''};
  const handleSubmit = values => {};
  const formik = useValidation({
    initialValues,
    handleSubmit,
    validationSchema: LoginValidationSchema,
  });
  const [passwdType, setPasswdType] = useState('password');
  const togglePassword = useCallback(() => {
    passwdType === 'password' ? setPasswdType('text') : setPasswdType('password');
  }, [passwdType]);
  return (
    <form className='w-full'>
      <Stack gap={2}>
        <InputLabel htmlFor='email'>Email Address</InputLabel>
        <InputField
          id='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder='example@gmail.com'
          error={Boolean(formik.touched.email && formik.errors.email)}
        />
        {formik.touched.email && formik.errors.email && (
          <Typography variant='body2' color='danger.main'>
            {formik.errors.email}
          </Typography>
        )}
        <InputLabel htmlFor='passwd'>Password</InputLabel>
        <InputField
          value={formik.values.password}
          onChange={formik.handleChange}
          id='password'
          type={passwdType}
          placeholder='●●●●●●'
          error={Boolean(formik.touched.password && formik.errors.password)}
          endAdornment={
            <InputAdornment sx={{cursor: 'pointer'}} position='end' onClick={togglePassword}>
              {passwdType === 'password' ? (
                <VisibilityIcon sx={{color: 'text.primary', opacity: 0.5, fontSize: '16px'}} />
              ) : (
                <VisibilityOffIcon sx={{color: 'text.primary', opacity: 0.5, fontSize: '16px'}} />
              )}
            </InputAdornment>
          }
        />
        {formik.touched.password && formik.errors.password && (
          <Typography variant='body2' color='danger.main'>
            {formik.errors.password}
          </Typography>
        )}
        <Stack
          direction='row'
          justifyContent='space-between'
          marginBottom={2}
          className='box-center'
        >
          <FormControlLabel
            slotProps={{
              typography: {
                variant: 'subtitle2',
              },
            }}
            className='MuiFormControlLabel'
            label='Remember Me'
            control={<Checkbox size='small' />}
          />
          <NavLink to='/reset' style={{textDecoration: 'none'}}>
            <Typography variant='body2' color='primary'>
              Forgot Password?
            </Typography>
          </NavLink>
        </Stack>
        <Button fullWidth onClick={formik.handleSubmit}>
          Log In
        </Button>
        <Typography align='center' variant='body2' fontWeight={500}>
          Don&apos;t have account yet?{' '}
          <Link underline='none' href='#'>
            New Account
          </Link>
        </Typography>
      </Stack>
    </form>
  );
};

export default Form;
