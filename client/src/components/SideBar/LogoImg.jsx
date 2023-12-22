// /src/components/SideBar/LogoImg.jsx
// Thursday, November 23rd 2023, 5:52 pm

import {Stack, CardMedia, Typography} from '@mui/material';
import Logo from '../../assets/Frame.png';
import React from 'react';

const LogoImg = () => {
  return (
    <Stack sx={{alignItems: 'center', gap: '4px'}}>
      <CardMedia
        component='img'
        src={Logo}
        sx={{width: {xs: 50, lg: 70}, height: {xs: 36, lg: 46}}}
      />
      <Typography fontWeight='bold' sx={{fontSize: {xs: '1.25rem', lg: '1.5rem'}}}>
        Wons
      </Typography>
    </Stack>
  );
};

export default LogoImg;
