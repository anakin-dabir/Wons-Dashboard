// /src/pages/Login/LoginPane.jsx
// Monday, November 27th 2023, 9:20 pm

import React from 'react';
import {Grid, Stack, CardMedia, Typography, Divider} from '@mui/material';
import Logo from '../../assets/Frame.png';
import SocialMediaBtns from '../../components/SocialMediaBtns';
import Google from '../../assets/Google.png';
import Facebook from '../../assets/Facebook.png';
import Form from './Form';

const LoginPane = () => {
  return (
    <Grid item xs={4} md={1.6} lg={1.2} bgcolor='neutral.main' className='h-full' padding='15px'>
      <Stack
        gap={5}
        sx={{
          maxWidth: {xs: '348px', sm: '400px', md: '380px'},
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Stack className='box-center' gap={4}>
          <CardMedia component='img' src={Logo} sx={{width: '90px'}} />
          <Typography variant='h5' fontWeight='bold'>
            Log in
          </Typography>
        </Stack>
        <Stack gap={4}>
          <Stack
            direction='row'
            className='box-center'
            sx={{
              justifyContent: 'space-between',
              // gap: '22px',
            }}
          >
            <SocialMediaBtns startIcon={<img src={Google} />}>Google</SocialMediaBtns>
            <SocialMediaBtns startIcon={<img src={Facebook} />}>Facebook</SocialMediaBtns>
          </Stack>
          <Divider flexItem>Or</Divider>
        </Stack>
        <Form />
      </Stack>
    </Grid>
  );
};

export default LoginPane;
