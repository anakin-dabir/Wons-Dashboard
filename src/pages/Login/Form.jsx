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

const Form = () => {
  const [passwdType, setPasswdType] = useState('password');
  const togglePassword = useCallback(() => {
    passwdType === 'password' ? setPasswdType('text') : setPasswdType('password');
  }, [passwdType]);
  return (
    <form className='w-full'>
      <Stack gap={2}>
        <InputLabel htmlFor='email'>Email Address</InputLabel>
        <InputField id='email' placeholder='example@gmail.com' />
        <InputLabel htmlFor='passwd'>Password</InputLabel>
        <InputField
          id='passwd'
          type={passwdType}
          placeholder='●●●●●●'
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
        <Button fullWidth>Log In</Button>
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
