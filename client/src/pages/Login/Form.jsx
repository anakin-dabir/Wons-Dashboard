/*eslint-disable */
// /src/pages/Login/Form.jsx
// Monday, November 27th 2023, 9:45 pm

import React, {useState, useCallback, useEffect} from 'react';
import {
  InputLabel,
  Stack,
  Typography,
  InputAdornment,
  FormControlLabel,
  Button,
  Checkbox,
} from '@mui/material';
import toast from 'react-hot-toast';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputField from '../../components/InputField';
import {Link as NavLink} from 'react-router-dom';
import useValidation from '../../components/forms/useValidation';
import {LoginValidationSchema} from '../../components/forms/ValidationSchema';
import ErrorTooltip from '../../components/ErrorTooltip/ErrorTooltip';
import {useLoginMutation} from '../../services/authApi';
import {FormButton} from '../../theme/theme';
import {setUser} from '../../store/slice/authSlice';
import {useDispatch} from 'react-redux';

const Form = () => {
  const initialValues = {email: '', password: ''};
  const [login, {isLoading}] = useLoginMutation();

  const handleSubmit = values => {
    login(values);
  };

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
          endIcon={
            formik.touched.email &&
            formik.errors.email && <ErrorTooltip message={formik.errors.email} />
          }
        />
        <InputLabel htmlFor='password'>Password</InputLabel>
        <InputField
          value={formik.values.password}
          onChange={formik.handleChange}
          id='password'
          type={passwdType}
          autoComplete='off'
          placeholder='●●●●●●'
          error={Boolean(formik.touched.password && formik.errors.password)}
          endIcon={
            formik.touched.password && formik.errors.password ? (
              <ErrorTooltip message={formik.errors.password} />
            ) : (
              <InputAdornment sx={{cursor: 'pointer'}} position='end' onClick={togglePassword}>
                {passwdType === 'password' ? (
                  <VisibilityIcon sx={{color: 'text.primary', opacity: 0.5, fontSize: '16px'}} />
                ) : (
                  <VisibilityOffIcon sx={{color: 'text.primary', opacity: 0.5, fontSize: '16px'}} />
                )}
              </InputAdornment>
            )
          }
        />

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
        <FormButton loading={isLoading} fullWidth onClick={formik.handleSubmit}>
          Log In
        </FormButton>
        <Stack direction='row' alignSelf='center' gap={1}>
          <Typography variant='body2' fontWeight={500}>
            Don&apos;t have account yet?
          </Typography>
          <NavLink to='/register' style={{textDecoration: 'none'}}>
            <Typography variant='body2' color='primary'>
              New Account
            </Typography>
          </NavLink>
        </Stack>
      </Stack>
    </form>
  );
};

export default Form;
