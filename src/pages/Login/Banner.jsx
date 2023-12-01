// /src/pages/Login/Banner.jsx
// Monday, November 27th 2023, 9:18 pm

import React from 'react';
import {Grid, CardMedia} from '@mui/material';
import Illustration from '../../assets/Illustration.png';

const Banner = () => {
  return (
    <Grid item md={2.4} lg={2.8} sx={{display: {xs: 'none', md: 'flex'}}} className='box-center'>
      <CardMedia
        component='img'
        src={Illustration}
        sx={{width: {md: '447px', lg: 'auto'}, height: {md: '422px', lg: 'auto'}}}
      />
    </Grid>
  );
};

export default Banner;
