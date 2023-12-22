// /src/pages/Login/Form.jsx
// Monday, November 27th 2023, 9:45 pm

import React, {useState, useCallback} from 'react';
import {InputLabel, Stack, Typography, InputAdornment, Checkbox, Link} from '@mui/material';
import InputField from '../../components/InputField';
import useValidation from '../../components/forms/useValidation';
import {SignupValidationSchema} from '../../components/forms/ValidationSchema';
import ErrorTooltip from '../../components/ErrorTooltip/ErrorTooltip';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {NavLink} from 'react-router-dom';
import {FormButton} from '../../theme/theme';
import {useRegisterMutation} from '../../services/authApi';

const Form = () => {
  const [register, {isLoading}] = useRegisterMutation();
  const initialValues = {email: '', password: '', username: '', fullName: '', agreeToTerms: false};
  const handleSubmit = async values => {
    await register(values);
  };
  const formik = useValidation({
    initialValues,
    handleSubmit,
    validationSchema: SignupValidationSchema,
  });
  const [passwdType, setPasswdType] = useState('password');
  const togglePassword = useCallback(() => {
    passwdType === 'password' ? setPasswdType('text') : setPasswdType('password');
  }, [passwdType]);
  return (
    <form className='w-full'>
      <Stack gap={2}>
        <Stack gap={1}>
          <InputLabel htmlFor='fullName'>Full Name</InputLabel>
          <InputField
            id='fullName'
            placeholder='Jiangyu'
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.fullName && formik.errors.fullName)}
            endIcon={
              formik.touched.fullName &&
              formik.errors.fullName && <ErrorTooltip message={formik.errors.fullName} />
            }
          />
        </Stack>
        <Stack gap={1}>
          <InputLabel htmlFor='email'>Email Address</InputLabel>
          <InputField
            id='email'
            placeholder='example@gmail.com'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.email && formik.errors.email)}
            endIcon={
              formik.touched.email &&
              formik.errors.email && <ErrorTooltip message={formik.errors.email} />
            }
          />
        </Stack>
        <Stack gap={1}>
          <InputLabel htmlFor='username'>Username</InputLabel>
          <InputField
            id='username'
            placeholder='johnkevine4362'
            value={formik.values.username}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.username && formik.errors.username)}
            endIcon={
              formik.touched.username &&
              formik.errors.username && <ErrorTooltip message={formik.errors.username} />
            }
          />
        </Stack>
        <Stack gap={1}>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <InputField
            id='password'
            type={passwdType}
            autoComplete='off'
            placeholder='●●●●●●'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.password && formik.errors.password)}
            endIcon={
              formik.touched.password && formik.errors.password ? (
                <ErrorTooltip message={formik.errors.password} />
              ) : (
                <InputAdornment sx={{cursor: 'pointer'}} position='end' onClick={togglePassword}>
                  {passwdType === 'password' ? (
                    <VisibilityIcon sx={{color: 'text.primary', opacity: 0.5, fontSize: '16px'}} />
                  ) : (
                    <VisibilityOffIcon
                      sx={{color: 'text.primary', opacity: 0.5, fontSize: '16px'}}
                    />
                  )}
                </InputAdornment>
              )
            }
          />
        </Stack>
        <Stack direction='row' alignItems='flex-start' gap={1}>
          <Checkbox
            size='small'
            sx={{padding: '2px'}}
            id='agreeToTerms'
            onChange={formik.handleChange}
            checked={formik.values.agreeToTerms}
          />
          <label htmlFor='agreeToTerms'>
            <Typography
              variant='body2'
              noWrap={false}
              sx={{
                color: formik.touched.agreeToTerms && formik.errors.agreeToTerms && 'danger.main',
              }}
            >
              By creating an account you agree to the{' '}
              <Link underline='none' href='#'>
                terms of use
              </Link>{' '}
              and our{' '}
              <Link underline='none' href='#'>
                privacy policy.
              </Link>
            </Typography>
          </label>
        </Stack>
        <FormButton loading={isLoading} fullWidth onClick={() => formik.handleSubmit()}>
          Create Account
        </FormButton>
        <Stack direction='row' alignSelf='center' gap={1}>
          <Typography variant='body2' fontWeight={500}>
            Already have an account?
          </Typography>
          <NavLink to='/login' style={{textDecoration: 'none'}}>
            <Typography variant='body2' color='primary'>
              Log in
            </Typography>
          </NavLink>
        </Stack>
      </Stack>
    </form>
  );
};

export default Form;
